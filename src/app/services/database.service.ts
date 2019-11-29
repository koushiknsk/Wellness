import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import {AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';


export interface MemberEnrollment {
  insPolicyNumber: '',
  dob:'',
  email: '',
  gender:'',
  mobileNo:''
}

export interface Users{
  memEnrollment?: MemberEnrollment
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private allUsers: Observable<Users[]>;
  private afsAllUsersCollection: AngularFirestoreCollection<Users>;

  constructor(public afAuth : AngularFireAuth, private afs: AngularFirestore) {
    this.afsAllUsersCollection = this.afs.collection<Users>('Users');
    this.allUsers = this.afsAllUsersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  async register(email: string, password: string, user: Users){
    const reg  = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((newUserCredential: firebase.auth.UserCredential) => {      
      this.afsAllUsersCollection.doc(`${newUserCredential.user.uid}`)
      .set(user);
    })
    .catch(error => {
      console.error(error);
      throw new Error(error);
    });
  }

  getCmpObjs(): Observable<Users[]> {
    return this.allUsers;
  }

  getCurrentUserData(id: string): Observable<Users> {
    return this.afsAllUsersCollection.doc<Users>(id).valueChanges().pipe(
      take(1),
      map(user => {
        return user
      })
    );
  }

  addMemEnrollData(uid: string, memE: MemberEnrollment): Promise<void> {
    try{
      return this.afsAllUsersCollection.doc(uid).update({ memEnrollment: memE});
    }catch(e){
      console.log(e)
    }
  }

 
  // addCompObj(co : Users): Promise<DocumentReference> {    
  //   return this.cmpObjCollection.add(co);
  // }

  // getIdeas(): Observable<Idea[]> {
  //   return this.ideas;
  // }
 
  // addIdea(idea: Idea): Promise<DocumentReference> {
  //   return this.ideaCollection.add(idea);
  // }
 
  // updateIdea(idea: Idea): Promise<void> {
  //   return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  // }
 
  // deleteIdea(id: string): Promise<void> {
  //   return this.ideaCollection.doc(id).delete();
  // }
}
