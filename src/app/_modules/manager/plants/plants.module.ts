import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantsFormComponent } from './plants-form/plants-form.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [
    PlantsComponent,
    PlantsListComponent,
    PlantsFormComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzPopconfirmModule
  ],
  exports: [
    PlantsComponent,
    PlantsListComponent,
    PlantsFormComponent
  ]
})
export class PlantsModule { }
