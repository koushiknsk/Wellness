import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [      
      { path: 'home', loadChildren: '../main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
      { path: 'goals',             loadChildren: '../goals-tab/goals-tab.module#GoalsTabPageModule' },
      { path: 'rewards', loadChildren: '../main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
    ]
  },
  {
    path:'',
    redirectTo: 'home/tab1',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})

export class HomePageModule {
  
}
