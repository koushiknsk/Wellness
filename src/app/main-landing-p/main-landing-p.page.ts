import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { DatabaseService} from 'src/app/services/Database.service';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular'
import { ActivatedRoute  } from '@angular/router';
 

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-p.page.html',
  styleUrls: ['./main-landing-p.page.scss'],
})
export class MainLandingPagePage implements OnInit {

  //Variables
  isMainContentCardVisible: boolean = true;
  isEarnMorePointsCardVisible: boolean = false;
  isNutritionAssesmentCardVisible: boolean = false;
  isSleepTrackingCardVisible: boolean = false;
  isNutritionAssesDetailsPageVisible: boolean = false;
  isNutritionCamPageVisible: boolean = false;
  isFitnessDevicesPageVisible: boolean = false;
  isPointsStatementPageVisible: boolean = false;

  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  doughnutChart: Chart;
  currUserId;

  constructor(private activatedRoute: ActivatedRoute, public router: Router,private platform : Platform, private dbService : DatabaseService) {

  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.currUserId)
    //need to check if there is any id on the current page
  }

  ngOnInit() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Exercise","Nutrition","Sleep"],
        datasets: [
          {
            label: "Charts",
            data: [3500, 1000, 2000,  3500],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgb(150, 150, 150)",
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth:1, 
          }  
          
        ]
      }
    });
  }

  

  setEarnedPointsCardVisbility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isEarnMorePointsCardVisible = true;
  }
  setNutritionPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesmentCardVisible = true;
  }
  nutritionPageCardBackBtn() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isEarnMorePointsCardVisible = true;
    this.isNutritionAssesmentCardVisible = false;
  }
  setSleepPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = true;
  }
  setNutritionAssesDetailsVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = true;
  }
  setNutritionCamPageVisibility() {
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = true;
  }
  nutritionCamPageBackBtn() {
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = true;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
  }
  setFitnessPageVisibility() {
    this.isMainContentCardVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = true;
  }
  nutritionCamCardBackBtn() {
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesDetailsPageVisible = true;
    this.isNutritionCamPageVisible = false;
  }
  earnMorePointsCardBackBtn() {
    this.isMainContentCardVisible = true;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
  }
  pointsEarnedCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isPointsStatementPageVisible = true;
  }

  public doughnutChartLabels: string[] = ['Age 18 to 24', 'Age 25 to 35', 'Above 35+'];
  public demodoughnutChartData: number[][] = [[350, 450, 100], [250, 350, 150]];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  async authorize(){
    let firstEntry : boolean 
    this.dbService.getCurrentUserData(this.currUserId).subscribe((cuData)=>{
      firstEntry = cuData.firstEntry
    })
    //console.log(this.platform.is('cordova'))
    let count = 0
    let fitnessData ={
      id: this.currUserId,
      isGoogleData: true,
      isFitbitData: false,
      steps: '123',
      distance: '',
      calories: '',
      sleep: ''
    }

    if(this.platform.is('cordova')){      
      if(!this.dbService.isAuthorized){
        this.dbService.gAuth()
        firstEntry = false
      }
      if(this.dbService.isAuthorized){
        await this.dbService.getTSteps()
        await this.dbService.getDistance()
        await this.dbService.getCalories()
        // await this.dbService.getSleep()
      // this.router.navigate(['/fitbit'],{
      //   queryParams: fitnessData,
      // });
      }

      if(this.dbService.steps != null){        
        fitnessData.steps = this.dbService.steps
        fitnessData.distance = this.dbService.distance
        fitnessData.calories = this.dbService.calories
        // fitnessData.sleep = this.dbService.sleep
        this.router.navigate(['/fitbit'],{
          queryParams: fitnessData,
        });
      }

    }
    //else just push to fitbit page
    else{
      console.log(fitnessData)
      this.router.navigate(['/fitbit'],{
        queryParams: fitnessData,
      });
    }
  }
}
