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
  kShow = false;
  visible = false;
  objType = "";
  refetch = false;

  questionId = "";
  plantId = "";
  action = "Crear";
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
      case "KPIs": {
        this.setTab(['Manager','KPIs']);
        this.inputTabs = ['Manager','KPIs'];
        this.switch("KPIs");
        break;
      }
    }
  }

  switch(tShow : string) {
    switch(tShow) {
      case "Questions": {
        this.qShow = true;
        this.pShow = false;
        this.kShow = false;
        break;
      }
      case "Plants": {
        this.qShow = false;
        this.pShow = true;
        this.kShow = false;
        break;
      }
      case "KPIs": {
        this.qShow = false;
        this.pShow = false;
        this.kShow = true;
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
    this.questionId = "";
    this.plantId = "";
    this.action = "Crear";
  }

  setQId(id : string) {
    this.questionId = id;
    this.action = "Editar";
    this.open();
  }

  setPId(id : string) {
    this.plantId = id;
    this.action = "Editar";
    this.open();
  }
}
