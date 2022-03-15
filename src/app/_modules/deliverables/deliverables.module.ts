import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';



@NgModule({
  declarations: [
    DeliverablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ DeliverablesComponent ]
})
export class DeliverablesModule { }
