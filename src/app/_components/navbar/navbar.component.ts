import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  user : any = localStorage.getItem('user');
  @Input() isCollapsed = false;
  @Output() tabEmitter = new EventEmitter<any>();
  imgSize = 180;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.user);
  }

  ngOnChanges() : void {
    if (this.isCollapsed) {
      this.imgSize = 60;
    } else {
      this.imgSize = 180;
    }
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.tabEmitter.emit("auth");
    this.router.navigate(['/auth']);
  }
}