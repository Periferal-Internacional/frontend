import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './_modules/auth/auth.component';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { VideogameComponent } from './_modules/videogame/videogame.component';
import { AnalyticsComponent } from './_modules/analytics/analytics.component';
import { LandingComponent } from './_modules/landing/landing.component';
import { ComponentsModule } from './_components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    VideogameComponent,
    AnalyticsComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
