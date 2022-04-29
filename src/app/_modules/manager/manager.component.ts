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
  oShow = false;
  visible = false;
  objType = "";
  refetch = false;

  user : any = localStorage.getItem("user");

  constructor() { }

  ngOnInit(): void {
    this.setTab();
    this.user = JSON.parse(this.user);
  }

  updateTab(tab : string) {
    switch(tab) {
      case "Questions": {
        this.setTab(['Manager','Questions']);
        this.inputTabs = ['Manager','Questions'];
        this.switch("Questions");
        break;
      }
      case "Plants": {
        this.setTab(['Manager','Plants']);
        this.inputTabs = ['Manager','Plants'];
        this.switch("Plants");
        break;
      }
      case "Operators": {
        this.setTab(['Manager','Operators']);
        this.inputTabs = ['Manager','Operators'];
        this.switch("Operators");
        break;
      }
    }
  }

  switch(tShow : string) {
    switch(tShow) {
      case "Questions": {
        this.qShow = true;
        this.pShow = false;
        this.oShow = false;
        break;
      }
      case "Plants": {
        this.qShow = false;
        this.pShow = true;
        this.oShow = false;
        break;
      }
      case "Operators": {
        this.qShow = false;
        this.pShow = false;
        this.oShow = true;
      }
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

  open() {
    this.visible = true;

    if (this.qShow) {
      this.objType = "Pregunta";
    } else if (this.pShow) {
      this.objType = "Planta";
    }
  }

  close() {
    this.visible = false;
  }

  changeStatus() {
    this.refetch = false;
  }

  submitSuccess() {
    this.close();
    this.refetch = true;
  }
}
