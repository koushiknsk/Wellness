import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { Observable } from 'rxjs';
import { DatabaseService, FitnessDetails} from 'src/app/services/Database.service';

@Component({
  selector: 'app-fitbit',
  templateUrl: './fitbit.page.html',
  styleUrls: ['./fitbit.page.scss'],
})
export class FitbitPage implements OnInit { 
  ftDetails :FitnessDetails ={
    type: 'google',
    date: new Date(),
    steps: '',
    calories: '',
    distance: '',
    sleep: ''  
  }

  isFitbitDataVisible;
  currUserId;
  //private homePageData : Observable<any>
  x : any ={
    id: null,
    isGoogleData : null,
    isFitbitData : null,
    steps: '',
    distance: '',
    calories: '',
    sleep: ''
  }
  constructor(public aRoute : ActivatedRoute, private activatedRoute: ActivatedRoute, private dbService : DatabaseService,private alertCtrl : AlertController){
    this.aRoute.queryParams.subscribe((res)=>{
      this.x = res
      this.currUserId = this.x.id
      this.ftDetails.steps = this.x.steps
      this.ftDetails.distance = this.x.distance
      this.ftDetails.calories = this.x.calories
      this.ftDetails.sleep = this.x.sleep
      console.log(this.currUserId)
    })
    //this.gAuth();
  }

  ngOnInit() {
    this.loadData()
  }

  async gAuth(){
    this.dbService.printData("Start")
    await this.dbService.gAuth()
  }

  async loadData(){
    console.log(this.ftDetails)
    if(this.dbService.isAuthorized){
      //this.dbService.printData(JSON.stringify(this.ftDetails))
      this.dbService.addFitnessDetails(this.currUserId,this.ftDetails)
      //this.dbService.printData("End")
    }
    else{
      await this.dbService.addFitnessDetails(this.currUserId,this.ftDetails)
      this.dbService.printData("Not Authrzd")
    }    
  }
}
