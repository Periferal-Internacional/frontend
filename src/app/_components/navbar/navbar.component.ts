import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user : any = localStorage.getItem('user');

  @Output() tabEmitter = new EventEmitter<any>();

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.user);
  }

  isCollapsed = false;

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

