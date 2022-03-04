import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './_modules/auth/auth.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { VideogameComponent } from './_modules/videogame/videogame.component';
import { AnalyticsComponent } from './_modules/analytics/analytics.component';
import { LandingComponent } from './_modules/landing/landing.component';
import { LeaderboardComponent } from './_components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    DashboardComponent,
    VideogameComponent,
    AnalyticsComponent,
    LandingComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
