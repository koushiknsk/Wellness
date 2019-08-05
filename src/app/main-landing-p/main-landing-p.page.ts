import { Component, OnInit } from '@angular/core';

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
  isPointsStatementPageVisible: boolean =false;


  constructor() {
  }

  ngOnInit() {

  }

  setEarnedPointsCardVisbility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isEarnMorePointsCardVisible = true;
  }
  setNutritionPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesmentCardVisible = true;
  }
  nutritionPageCardBackBtn() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isEarnMorePointsCardVisible = true;
    this.isNutritionAssesmentCardVisible = false;
  }
  setSleepPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = true;
  }
  setNutritionAssesDetailsVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isPointsStatementPageVisible=false;
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
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = true;
  }
  nutritionCamPageBackBtn() {
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = true;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
  }
  setFitnessPageVisibility() {
    this.isMainContentCardVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = true;
  }
  nutritionCamCardBackBtn(){
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesDetailsPageVisible = true;
    this.isNutritionCamPageVisible = false;
  }
  earnMorePointsCardBackBtn(){
    this.isMainContentCardVisible = true;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isPointsStatementPageVisible=false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
  }
  pointsEarnedCardVisibility(){
    this.isMainContentCardVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isPointsStatementPageVisible=true;
  }

}
