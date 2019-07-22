import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-tab',
  templateUrl: './goals-tab.page.html',
  styleUrls: ['./goals-tab.page.scss'],
})
export class GoalsTabPage implements OnInit {
  isBVisible : boolean = false;
  isSVisible : boolean = false;
  isGVisible : boolean = false;
  isPVisible : boolean = false;
  isMainContentCardVisible :boolean = true;
  isEarnMorePointsCardVisible : boolean =false;
  isGoalPageCardVisible :boolean= false;

  pointsEarned : number
  pointsRequired : number

  constructor() {
    this.setPointsEarned(20000);
    this.setPointsRequired(2000); }
    setPointsEarned(pointsEarned : number){
      this.pointsEarned = pointsEarned;
    }
  
    setPointsRequired(pointsRequired : number){
      this.pointsRequired = pointsRequired;
    }
  
    setVisibility(){
  
      if(this.pointsEarned >= 0 && this.pointsEarned < 10000){
        this.isBVisible = true;
      }
      else if(this.pointsEarned >= 10000 && this.pointsEarned < 20000){
        this.isSVisible = true;
      }
      else if(this.pointsEarned >= 20000 && this.pointsEarned < 30000){
        this.isGVisible = true;
      }
      else if(this.pointsEarned >= 30000 && this.pointsEarned <= 40000){
        this.isPVisible = true;
      }
  
    }

    ngOnInit() {
      this.setVisibility();
  
    }

}
