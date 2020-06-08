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

  BarChart

  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  doughnutChart: Chart;
  currUserId;

  constructor(private activatedRoute: ActivatedRoute, public router: Router,private platform : Platform, private dbService : DatabaseService) {

  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.currUserId)
    //need to check if there is any id on the current page
  }

  ngOnInit() {

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
      labels: ["07th-13th July", "14th-19th July", "21st-27th July"],
      datasets: [{
          label: 'Sleep Activity',
          data: [2000 ,8000 , 4000,10000],
          backgroundColor: [
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)'
              
          ],
          borderColor: [
              'rgba(54, 162, 235,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0.5
      }]
      }, 
      options: {
      title:{
          text:"Bar Chart",
          display:false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
      legend:{
        labels:{
          fontSize: 8
        }
      }
      }

    });

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

  setDefaultAllFalse(){
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isPointsStatementPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
  } 

  setEarnedPointsCardVisbility() {
    this.setDefaultAllFalse();
    this.isEarnMorePointsCardVisible = true;
  }
  setNutritionPageCardVisibility() {
    this.setDefaultAllFalse();
    this.isNutritionAssesmentCardVisible = true;
  }
  nutritionPageCardBackBtn() {
    this.setDefaultAllFalse();
    this.isEarnMorePointsCardVisible = true;    
  }
  setSleepPageCardVisibility() {
    this.setDefaultAllFalse()
    this.isSleepTrackingCardVisible = true;
  }
  setNutritionAssesDetailsVisibility() {
    this.setDefaultAllFalse()
    this.isNutritionAssesDetailsPageVisible = true;
  }
  setNutritionCamPageVisibility() {
    this.setDefaultAllFalse()
    this.isNutritionCamPageVisible = true;
  }
  nutritionCamPageBackBtn() {
    this.setDefaultAllFalse()
    this.isNutritionAssesmentCardVisible = true;
  }
  setFitnessPageVisibility() {
    this.setDefaultAllFalse()
    this.isFitnessDevicesPageVisible = true;
  }
  nutritionCamCardBackBtn() {
    this.setDefaultAllFalse()
    this.isNutritionAssesDetailsPageVisible = true;    
  }
  earnMorePointsCardBackBtn() {
    this.setDefaultAllFalse()
    this.isMainContentCardVisible = true;
  }
  pointsEarnedCardVisibility() {
    this.setDefaultAllFalse()
    this.isPointsStatementPageVisible = true;
  }

  navigateToEP1(){
    this.router.navigate(['/enrollmentp1',this.currUserId]);
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
