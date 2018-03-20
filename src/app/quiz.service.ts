import { Injectable } from '@angular/core';
import { Question } from './models/question.model';

@Injectable()
export class QuizService {

  allQuestions: Question[] = [];
  questionIndex = 0;

  constructor() {
    let question = new Question();
    question.id = 1;
    question.text = "this is que 1";
    this.allQuestions.push(question);

    question = new Question();
    question.id = 2;
    question.text = "this is que 2";
    this.allQuestions.push(question);

    question = new Question();
    question.id = 3;
    question.text = "this is que 3";
    this.allQuestions.push(question);
  }

  isLastQuestion() {
    return this.questionIndex == this.allQuestions.length - 1;
  }
    
  getNextQuestion() {
    return this.allQuestions[this.questionIndex++];
  }

  endQuiz() {
    this.questionIndex = 0;
  }

}
