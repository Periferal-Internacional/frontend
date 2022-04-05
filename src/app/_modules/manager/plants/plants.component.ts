import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  action = "";
  constructor() { }

  ngOnInit(): void {
    this.setAction("list");
  }

  setAction(action : string) {
    this.action = action;
  }
}
