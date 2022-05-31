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
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { KPIsComponent } from './kpis/kpis.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    ManagerComponent,
    KPIsComponent
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
    NzDrawerModule,
    NzLayoutModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCardModule
  ],
  exports: [ManagerComponent, KPIsComponent]
})
export class ManagerModule { }
