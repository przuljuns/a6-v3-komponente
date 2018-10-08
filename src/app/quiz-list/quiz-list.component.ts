import { Component, OnInit } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizItems: QuizItem[];

  constructor() { 
    this.quizItems = [
      {question: 'Glavni gradi Italije?', answer: 'Rim', hideAnswer: true},
      {question: 'Najviši vrh Evrope?', answer: 'Elbrus', hideAnswer: true},
      {question: 'Reka ispod savskog mosta?', answer: 'Sava', hideAnswer: true}
    ];
  }
  
  ngOnInit() {
  }

  addQuizItem(quizItem) {
    this.quizItems.unshift(quizItem);
  }
}
