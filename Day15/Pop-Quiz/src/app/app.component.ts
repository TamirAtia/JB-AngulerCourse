import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data
  currentQuestion: Question;
  currentQuestionIndex: number;

  summary: Question[]=[];
  isQuizOver: boolean=false;

  constructor(){
    this.currentQuestionIndex = 0
    this.currentQuestion= QUESTIONS[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver= false;
  }

  //methods
  userSelect(answer: string){
    if(!this.isQuizOver){
      let answerIndex = this.currentQuestion.answers.indexOf(answer);
      this.currentQuestion.userAnswer = answerIndex;

      this.summary.push(this.currentQuestion)
      this.currentQuestionIndex++;
      this.currentQuestion= QUESTIONS[this.currentQuestionIndex];
      this.isQuizOver = !(this.currentQuestion);
    }
  }

}
