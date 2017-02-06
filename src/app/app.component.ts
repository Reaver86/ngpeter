import { Component } from '@angular/core';
import {Question} from "./question/question.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  showStartpage : boolean = true;
  showQuestions: boolean = false;

  questions: Question[];

  onStartApp(event) {
    this.showStartpage = false;
    this.showQuestions = true;

    console.log(require('../assets/MockData/questions.json'));
  }
}
