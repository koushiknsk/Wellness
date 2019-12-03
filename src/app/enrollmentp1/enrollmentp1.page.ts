import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, PersonalDetails} from 'src/app/services/Database.service'; 

@Component({
  selector: 'app-enrollmentp1',
  templateUrl: './enrollmentp1.page.html',
  styleUrls: ['./enrollmentp1.page.scss'],
})
export class Enrollmentp1Page implements OnInit {

  currUserId;
  personalDetails: PersonalDetails ={
    height: '',
    weight: '',
    waist: '',
    bloodGroup: '',
    systolic: '',
    diastolic: '',
    bloodSugar: ''
  }
  

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dbService : DatabaseService) { 
  }


  ngOnInit() {}
 
  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.currUserId !=null){
    this.dbService.getCurrentUserData(this.currUserId).subscribe(currUserData  =>{
      if(currUserData.personalDetails != null)
       this.personalDetails = currUserData.personalDetails
    })
    }
  }

  updatePersonalData(){
    try{
      this.dbService.addpersonalData(this.currUserId,this.personalDetails)
      this.router.navigate(['/enrollmentp3',this.currUserId]);
    }catch(e){ 
      console.dir(e);
    }
  }
  //[routerLink]="['/enrollmentp3']" routerLinkActive="router-link-active"
    
}
