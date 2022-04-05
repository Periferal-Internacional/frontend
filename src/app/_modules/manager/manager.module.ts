import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { QuestionsModule } from './questions/questions.module';
import { PlantsModule } from './plants/plants.module';
import { ComponentsModule } from '../../_components/components.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    QuestionsModule,
    PlantsModule,
    ComponentsModule,
    NzMenuModule
  ],
  exports: [ManagerComponent]
})
export class ManagerModule { }
