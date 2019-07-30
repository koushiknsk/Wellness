import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enrollmentp1',
  templateUrl: './enrollmentp1.page.html',
  styleUrls: ['./enrollmentp1.page.scss'],
})
export class Enrollmentp1Page implements OnInit {

  isOneVisible : Boolean = false
  isTwoVisible : Boolean = false


  constructor() { 
    this.onEnter()
  }


  ngOnInit() {}
  onEnter(){
    this.isOneVisible=true;
    this.isTwoVisible = false;
  }

  enrollmentOne(){
    this.isOneVisible = false;
    this.isTwoVisible = true;
  }  
  
  oneBack(){
    this.isOneVisible = true;
    this.isTwoVisible = false;
  }
    
}
