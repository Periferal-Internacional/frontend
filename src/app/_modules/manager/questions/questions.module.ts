import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    NzIconModule
  ],
  exports: [
    QuestionsComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ]
})
export class QuestionsModule { }
