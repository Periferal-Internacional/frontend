import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsStatisticComponent } from './analytics-statistic/analytics-statistic.component';
import { AnalyticsPeopleComponent } from './analytics-people/analytics-people.component';

// EXTERNAL LIBRARIES
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [AnalyticsComponent, AnalyticsStatisticComponent, AnalyticsPeopleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzStatisticModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzProgressModule,
    NzDrawerModule,
    NzCardModule,
    NzModalModule,
    NzInputModule
  ],
  exports: [AnalyticsComponent, AnalyticsStatisticComponent, AnalyticsPeopleComponent]
})
export class AnalyticsModule { }
