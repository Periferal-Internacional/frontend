import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';
import { ComponentsModule } from 'src/app/_components/components.module';


@NgModule({
  declarations: [
    DeliverablesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [ DeliverablesComponent ]
})
export class DeliverablesModule { }
