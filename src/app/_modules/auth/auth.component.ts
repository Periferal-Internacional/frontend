import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  tabEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.tabEvent.emit();
  }

}
