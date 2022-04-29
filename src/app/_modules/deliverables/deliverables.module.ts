import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesComponent } from './deliverables.component';
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DeliDropdownComponent } from './deli-dropdown/deli-dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DeliTextComponent } from './deli-text/deli-text.component';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    DeliverablesComponent,
    DeliDropdownComponent,
    DeliTextComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzUploadModule,
    NzMessageModule,
    NzLayoutModule,
    NzDropDownModule,
    NzInputModule
  ],
  exports: [ 
    DeliverablesComponent

  ]
})
export class DeliverablesModule { }
