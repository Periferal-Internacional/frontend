import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    DeliverablesComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ DeliverablesComponent ]
})
export class DeliverablesModule { }
