import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnairComponent } from './questionnair.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestionnairComponent, QuestionComponent],
  exports: [QuestionnairComponent]
})
export class QuestionnairModule { }
