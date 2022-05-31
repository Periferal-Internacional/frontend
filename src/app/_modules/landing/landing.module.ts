import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [
    LandingComponent,
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
