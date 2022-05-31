import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any = localStorage.getItem("user");
  collapsed = false;
  constructor(
    private api : ApiService
  ) { }


  sendEvent() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.user);
  }
}
