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
import { DeliButtonComponent } from './deli-button/deli-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    DeliverablesComponent,
    DeliDropdownComponent,
    DeliTextComponent,
    DeliButtonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzUploadModule,
    NzMessageModule,
    NzLayoutModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzCardModule
  ],
  exports: [ 
    DeliverablesComponent

  ]
})
export class DeliverablesModule { }
