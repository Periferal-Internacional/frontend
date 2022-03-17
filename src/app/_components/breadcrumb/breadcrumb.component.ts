import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
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
    console.log(this.tabs);
  }
}
