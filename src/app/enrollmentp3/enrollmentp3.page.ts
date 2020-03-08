import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, LifestyleDetails, FoodDetails} from 'src/app/services/Database.service'; 

@Component({
  selector: 'app-enrollmentp3',
  templateUrl: './enrollmentp3.page.html',
  styleUrls: ['./enrollmentp3.page.scss'],
})
export class Enrollmentp3Page implements OnInit {

  currUserId;
  lifeStyleDetails: LifestyleDetails ={
    cigarettes: '',
    alcohol: '',
    feeling: ''
  }
  
  foodDetails: FoodDetails ={
    wholegrains: '',
    dairy: '',
    fruits: '',
    vegetables: '',
    meatAndPoultry: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dbService : DatabaseService) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.currUserId !=null){
    this.dbService.getCurrentUserData(this.currUserId).subscribe(currUserData  =>{
      if(currUserData.lifeStyleDetails != null && currUserData.foodDetails != null){
       this.lifeStyleDetails = currUserData.lifeStyleDetails
       this.foodDetails = currUserData.foodDetails
      }
    })
    }
  }

  updateLifestyleFoodData(){
    try{
      console.log(this.currUserId)
      this.dbService.addLifestyleData(this.currUserId,this.lifeStyleDetails)
      this.dbService.addFoodData(this.currUserId,this.foodDetails)
      this.router.navigate(['/home/home',this.currUserId]);
    }catch(e){ 
      console.dir(e);
    }
  }
  //[routerLink]="['/home/home']" routerLinkActive="router-link-active"
  
}
