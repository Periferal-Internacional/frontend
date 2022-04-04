import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionsComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ]
})
export class QuestionsModule { }
