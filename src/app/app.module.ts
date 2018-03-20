import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionnairModule } from './questionnair/questionnair.module';
import { QuizService } from './quiz.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuestionnairModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
