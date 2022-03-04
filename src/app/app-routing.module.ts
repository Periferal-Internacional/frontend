import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './_modules/analytics/analytics.component';
import { AuthComponent } from './_modules/auth/auth.component';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { LandingComponent } from './_modules/landing/landing.component';
import { VideogameComponent } from './_modules/videogame/videogame.component';

const routes: Routes = [
  {
    'path': '',
    'component': LandingComponent
  },
  {
    'path': 'auth',
    'component': AuthComponent,
  },
  {
    'path': 'videogame',
    'component': VideogameComponent
  },
  {
    'path': 'dashboard',
    'component': DashboardComponent
  },
  {
    'path': 'analytics',
    'component': AnalyticsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
