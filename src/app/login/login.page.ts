import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import {auth} from'firebase/app';
import { Router } from '@angular/router';
import { DatabaseService, Users} from 'src/app/services/Database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string;
  password : string;

  constructor(public afAuth : AngularFireAuth, private router: Router, private userService : DatabaseService) { 
  }

  ngOnInit() {
  }

  async login(){
    const {username, password} = this
    try{
      const res  = await this.afAuth.auth.signInWithEmailAndPassword(username,password)      
      if(res != null){
        this.router.navigate(['/member-enrollment',res.user.uid]);
      }
    }catch(e){
      console.dir(e);
    }
  }

  redirectToRegiister(){
    this.router.navigate(['/register']);
  }

}
