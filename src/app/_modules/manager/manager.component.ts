import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  tabs : string[] = [];
  inputTabs : string[] = [];

  qShow = false;
  pShow = false;
  constructor() { }

  ngOnInit(): void {
    this.setTab();
  }

  updateTab(tab : string) {
    if (tab == 'Questions') {
      this.setTab(['Manager','Questions']);
      this.inputTabs = ['Manager','Questions'];
      this.switch("Questions");
    } else {
      this.setTab(['Manager','Plants']);
      this.inputTabs = ['Manager','Plants'];
      this.switch("Plants");
    }
  }

  switch(tShow : string) {
    if (tShow == "Questions") {
      this.qShow = true;
      this.pShow = false;
    } else if (tShow == "Plants") {
      this.qShow = false;
      this.pShow = true;
    }
  }


  setTab(tab?: string[]) {
    if (!tab) {
      var temp = location.href.split("/");
      for (var i = 0; i < 3; i++) {
        temp.shift();
      }
      for (var i = 0; i < temp.length; i++) {
        this.tabs.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
      }

      this.switch(this.tabs.reverse()[0]);
    }
    else {
      this.tabs = tab;
    }
  }
}
