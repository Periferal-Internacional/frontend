import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  @Input() inputTabs : string[] = [];
  tabs : string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setTab(this.inputTabs);
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
    } else {
      this.tabs = tab;
    }
  }
}
