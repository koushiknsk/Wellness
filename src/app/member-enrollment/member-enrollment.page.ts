import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, MemberEnrollment} from 'src/app/services/Database.service'; 
//import { DatabaseService} from 'src/app/services/Database.service'; 
@Component({
  selector: 'app-member-enrollment',
  templateUrl: './member-enrollment.page.html',
  styleUrls: ['./member-enrollment.page.scss'],
})
export class MemberEnrollmentPage implements OnInit {
  currUserId: string

  // insPolNum: string;
  // email: string;


  memEnroll: MemberEnrollment={
    insPolicyNumber: '',
    dob:'',
    email: '',
    gender:'',
    mobileNo:''
  }
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService : DatabaseService) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("ion")
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.currUserId)
    //need to check if there is any id on the current page
    if(this.currUserId !=null){
    this.userService.getCurrentUserData(this.currUserId).subscribe(currUserData  =>{
      if(currUserData.memEnrollment != null)
       this.memEnroll = currUserData.memEnrollment
    })
    }
  }

  updateMemEnrollData(){
    try{
      //We can check if this.memEnroll  is null just to verify if we have data or not
      // if we have data then we will proceed to next page w/o any updates else we will update data
      console.log(this.currUserId)
      this.userService.addMemEnrollData(this.currUserId,this.memEnroll)
      this.router.navigate(['/enrollmentp1',this.currUserId]);
      //this.router.navigate(['/home/home',this.currUserId]);
    }catch(e){ 
      console.dir(e);
    }
  }
}
