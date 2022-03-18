import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';



@NgModule({
  declarations: [
    DeliverablesComponent
  ],
  imports: [
    CommonModule,
    NzUploadModule
  ],
  exports: [ 
    DeliverablesComponent

  ]
})
export class DeliverablesModule { }
