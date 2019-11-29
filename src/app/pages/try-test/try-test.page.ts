import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, Users} from 'src/app/services/Database.service';
import { Observable } from 'rxjs';
import {AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-try-test',
  templateUrl: './try-test.page.html',
  styleUrls: ['./try-test.page.scss'],
})
export class TryTestPage implements OnInit {

//   private displayAllObjs: Observable<Users[]>;
//   allObjs: Users[] = null
//   currUserId: string

//   inputCurrUser: User= {
//     uid: '',
//     username: ''
//   }

//   inputCmpObj: Users= {
//     name: '',
//     user: this.inputCurrUser,
    
//   }

//   currentUserObj: Users= {
//     name: '',
//     user: null
//   }
 

   constructor(private router: Router, public afAuth : AngularFireAuth, private activatedRoute: ActivatedRoute, private dbService: DatabaseService) { }
 
  ngOnInit() {
    // this.displayAllObjs = this.dbService.getCmpObjs();
    // this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');

  }

//   ionViewWillEnter() {
//     this.displayAllObjs.subscribe(allObjss => {
//       this.allObjs = allObjss
//     })
//   }

//   addObj(){
//     this.inputCurrUser.uid = this.currUserId
//     this.dbService.addCompObj(this.inputCmpObj)
//   }

//   showObjs(){
//     for(let eachObj of this.allObjs){
//       if(eachObj.user.uid==this.currUserId){
//         this.dbService.getCmpObj(eachObj.id).subscribe(currentUser => {
//           this.currentUserObj = currentUser;
//         })
//       }
//     }
//   }

//     // return firebase
//     // .auth()
//     // .createUserWithEmailAndPassword(this.email, this.password)
//     // .then((newUserCredential: firebase.auth.UserCredential) => {
//     //   firebase
//     //     .firestore()
//     //     .doc(`/userProfile/${newUserCredential.user.uid}`)
//     //     .set({'email': this.email});
//     // })
    
//     // .catch(error => {
//     //   console.error(error);
//     //   throw new Error(error);
//     // });

//   logout(){
//     console.log("logedout")
//     this.afAuth.auth.signOut();
//   //   this.afAuth.auth.signOut()
//   //   .then(() => {
//   //     this.firebaseService.unsubscribeOnLogOut();
//   //     resolve();
//   //   })
//   }

//   //this.router.navigate(['/member-enrollment']);
}
