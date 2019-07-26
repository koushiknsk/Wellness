import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-p.page.html',
  styleUrls: ['./main-landing-p.page.scss'],
})
export class MainLandingPagePage implements OnInit {

  isBVisible: boolean = false;
  isSVisible: boolean = false;
  isGVisible: boolean = false;
  isPVisible: boolean = false;
  isMainContentCardVisible: boolean = true;
  isEarnMorePointsCardVisible: boolean = false;
  isNutritionAssesmentCardVisible: boolean = false;
  isSleepTrackingCardVisible: boolean = false;
  isNutritionAssesDetailsPageVisible: boolean = false;
  isNutritionCamPageVisible: boolean = false;
  isFitnessDevicesPageVisible: boolean = false;

  pointsEarned: number
  pointsRequired: number

  constructor() {
    this.setPointsEarned(20000);
    this.setPointsRequired(2000);
  }

  ngOnInit() {
    this.setVisibility();

  }

  setPointsEarned(pointsEarned: number) {
    this.pointsEarned = pointsEarned;
  }

  setPointsRequired(pointsRequired: number) {
    this.pointsRequired = pointsRequired;
  }

  setVisibility() {

    if (this.pointsEarned >= 0 && this.pointsEarned < 10000) {
      this.isBVisible = true;
    }
    else if (this.pointsEarned >= 10000 && this.pointsEarned < 20000) {
      this.isSVisible = true;
    }
    else if (this.pointsEarned >= 20000 && this.pointsEarned < 30000) {
      this.isGVisible = true;
    }
    else if (this.pointsEarned >= 30000 && this.pointsEarned <= 40000) {
      this.isPVisible = true;
    }

  }
  setEarnedPointsCardVisbility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = true;
  }
  setNutritionPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = true;
  }
  setSleepPageCardVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = true;
  }
  setNutritionAssesDetailsVisibility() {
    this.isMainContentCardVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = false;
    this.isEarnMorePointsCardVisible = false;
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
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = true;
  }
  setFitnessPageVisibility() {
    this.isMainContentCardVisible = false;
    this.isEarnMorePointsCardVisible = false;
    this.isNutritionAssesmentCardVisible = false;
    this.isSleepTrackingCardVisible = false;
    this.isNutritionAssesDetailsPageVisible = false;
    this.isNutritionCamPageVisible = false;
    this.isFitnessDevicesPageVisible = true;

  }

}
