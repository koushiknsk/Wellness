import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enrollmentp1',
  templateUrl: './enrollmentp1.page.html',
  styleUrls: ['./enrollmentp1.page.scss'],
})
export class Enrollmentp1Page implements OnInit {

  isOneVisible : Boolean = false
  isTwoVisible : Boolean = false
  isThreeVisible : Boolean = false
  isFourVisible : Boolean = false
  isMCVisible : Boolean

  constructor() { 
    this.isMCVisible  = true;
  }


  ngOnInit() {}

  enrollmentOne(){
    this.isOneVisible = true;
    this.isMCVisible = false;
  }  
  
  oneBack(){
    this.isOneVisible = false;
    this.isMCVisible = true;
  }

  enrollmentTwo(){
    this.isTwoVisible = true;
    this.isMCVisible = false;
  }  
  
  twoBack(){
    this.isTwoVisible = false;
    this.isMCVisible = true;
  }
    
}
