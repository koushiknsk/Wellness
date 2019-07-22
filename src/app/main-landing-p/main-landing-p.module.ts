import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainLandingPagePage } from './main-landing-p.page';

const routes: Routes = [
  {
    path: '',
    component: MainLandingPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainLandingPagePage]
})
export class MainLandingPagePageModule {}
