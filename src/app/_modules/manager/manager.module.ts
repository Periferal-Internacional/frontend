import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { QuestionsModule } from './questions/questions.module';
import { PlantsModule } from './plants/plants.module';
import { ComponentsModule } from '../../_components/components.module';
@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    QuestionsModule,
    PlantsModule,
    ComponentsModule
  ],
  exports: [ManagerComponent]
})
export class ManagerModule { }
