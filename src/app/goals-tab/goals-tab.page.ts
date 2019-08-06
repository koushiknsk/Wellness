import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-tab',
  templateUrl: './goals-tab.page.html',
  styleUrls: ['./goals-tab.page.scss'],
})
export class GoalsTabPage implements OnInit {
  
  togg:boolean = true;
  count : number = 0
  updateToggleSet(sTog : number ){
    this.count++;
    if(sTog === 1 && this.count%2===1){
      this.togg = false;
    }
    else if(sTog === 1 && this.count%2===0){
      this.togg = true;
    }
  }
 
  pointsEarned : number
  pointsRequired : number

  constructor() {
  
  }
    ngOnInit() {
     
    }

}
