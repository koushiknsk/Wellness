import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', loadChildren: './landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'enrollmentp1', loadChildren: './enrollmentp1/enrollmentp1.module#Enrollmentp1PageModule' },
  { path: 'enrollmentp2', loadChildren: './enrollmentp2/enrollmentp2.module#Enrollmentp2PageModule' },
  { path: 'enrollmentp3', loadChildren: './enrollmentp3/enrollmentp3.module#Enrollmentp3PageModule' },
  { path: 'enrollmentp4', loadChildren: './enrollmentp4/enrollmentp4.module#Enrollmentp4PageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main-landing-page', loadChildren: './main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
  { path: 'goals-tab', loadChildren: './goals-tab/goals-tab.module#GoalsTabPageModule' },
  { path: 'member-enrollment', loadChildren: './member-enrollment/member-enrollment.module#MemberEnrollmentPageModule' },
  { path: 'rewards-tab', loadChildren: './rewards-tab/rewards-tab.module#RewardsTabPageModule' },  { path: 'weekly-report', loadChildren: './weekly-report/weekly-report.module#WeeklyReportPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
