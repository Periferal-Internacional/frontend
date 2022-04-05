import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
  }

  fetchUser() {
    
  }
}
