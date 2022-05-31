import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { ComponentsModule } from '../../_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule
  ],
  exports: [
    HelpComponent
  ]
})
export class HelpModule { }
