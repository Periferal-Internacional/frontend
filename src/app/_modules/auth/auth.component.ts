import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  tabEvent = new EventEmitter();
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.tabEvent.emit();
  }

  update() {
    if (this.loading) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  }
}
