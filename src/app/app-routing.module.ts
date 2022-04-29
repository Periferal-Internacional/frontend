import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './_modules/analytics/analytics.component';
import { AuthComponent } from './_modules/auth/auth.component';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { DeliverablesComponent } from './_modules/deliverables/deliverables.component';
import { HelpComponent } from './_modules/help/help.component';
import { LandingComponent } from './_modules/landing/landing.component';
import { ManagerComponent } from './_modules/manager/manager.component';
import { VideogameComponent } from './_modules/videogame/videogame.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'auth', component: AuthComponent,
  },
  {
    path: 'videogame', component: VideogameComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'analytics', component: AnalyticsComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path:  'deliverables', component: DeliverablesComponent
  },
  {
    path: 'manager', component: ManagerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
