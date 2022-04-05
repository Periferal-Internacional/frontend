import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzPopconfirmModule
  ],
  exports: [
    QuestionsComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ]
})
export class QuestionsModule { }
