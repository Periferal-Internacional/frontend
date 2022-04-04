import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  tabs : string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setTab();
  }

  setTab() {
    var temp = location.href.split("/");
    for (var i = 0; i < 3; i++) {
      temp.shift();
    }
    for (var i = 0; i < temp.length; i++) {
      this.tabs.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
    }
  }
}
