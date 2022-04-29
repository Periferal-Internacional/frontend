import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    DeliverablesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzUploadModule,
    NzMessageModule,
    NzLayoutModule
  ],
  exports: [ 
    DeliverablesComponent

  ]
})
export class DeliverablesModule { }
