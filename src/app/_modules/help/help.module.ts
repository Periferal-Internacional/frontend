import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { ComponentsModule } from '../../_components/components.module';


@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HelpComponent
  ]
})
export class HelpModule { }
