import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { DashboardComponent } from './dashboard.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';

// EXTERNAL LIBRARIES
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  declarations: [
    DashboardComponent,
    CircleProgressComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzProgressModule,
    NzCardModule,
    NzStatisticModule
  ],
  exports: [
    DashboardComponent,
    CircleProgressComponent
  ]
})
export class DashboardModule { }
