import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  action = "";
  constructor() { }

  ngOnInit(): void {
    this.setAction("list");
  }

  setAction(action : string) {
    this.action = action;
  }
}
