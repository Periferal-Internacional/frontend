import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { QuestionsModule } from './questions/questions.module';
import { PlantsModule } from './plants/plants.module';
import { ComponentsModule } from '../../_components/components.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


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
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzDrawerModule
  ],
  exports: [ManagerComponent]
})
export class ManagerModule { }
