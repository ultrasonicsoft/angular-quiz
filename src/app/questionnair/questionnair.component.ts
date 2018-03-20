import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questionnair',
  templateUrl: './questionnair.component.html',
  styleUrls: ['./questionnair.component.css']
})
export class QuestionnairComponent implements OnInit {

  nextQuestion: Question;
  isOnLastQuestion = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.nextQuestion = this.quizService.getNextQuestion();
  }

  next() {
    this.isOnLastQuestion = this.quizService.isLastQuestion();
    this.nextQuestion = this.quizService.getNextQuestion();
  }
}
