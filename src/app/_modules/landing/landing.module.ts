import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingButtonComponent } from './landing-button/landing-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [
    LandingComponent,
    LandingButtonComponent,
    LandingHeaderComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzPageHeaderModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
