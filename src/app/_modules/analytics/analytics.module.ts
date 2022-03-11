import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { AnalyticsComponent } from './analytics.component';

// EXTERNAL LIBRARIES
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule
  ],
  exports: [AnalyticsComponent]
})
export class AnalyticsModule { }
