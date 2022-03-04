import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './_components/components.module';
import { AnalyticsModule } from './_modules/analytics/analytics.module';
import { AuthModule } from './_modules/auth/auth.module';
import { DashboardModule } from './_modules/dashboard/dashboard.module';
import { LandingModule } from './_modules/landing/landing.module';
import { VideogameModule } from './_modules/videogame/videogame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AnalyticsModule,
    AuthModule,
    DashboardModule,
    LandingModule,
    VideogameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
