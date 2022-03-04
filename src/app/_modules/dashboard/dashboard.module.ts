import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
