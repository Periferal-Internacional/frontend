import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingButtonComponent } from './landing-button/landing-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingComponent,
    LandingButtonComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
