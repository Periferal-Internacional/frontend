import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'analytics-statistic',
  templateUrl: './analytics-statistic.component.html'
})
export class AnalyticsStatisticComponent implements OnInit{
  users : Array<any> = [];
  medalCount = 0;
  constructor(
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getPipe("users").subscribe((resp : {[key: string] : any}) => {
      for (var i = 0; i < resp.length; i++) {
        this.users.push(resp[i]);
      }
      this.calculateMedals();
    });
  }

  jiMedal(user : any) {
    if (user.user.xp_ji == 150) {
      this.medalCount += 3;
    } else if (user.user.xp_ji >= 100 && user.user.xp_ji < 150) {
      this.medalCount += 2;
    } else if (user.user.xp_ji >= 50 && user.user.xp_ji < 100){
      this.medalCount += 1;
    }
  }

  jrMedal(user : any) {
    if (user.user.xp_jr == 150) {
      this.medalCount += 3;
    } else if (user.user.xp_jr >= 100 && user.user.xp_jr < 150) {
      this.medalCount += 2;
    } else if (user.user.xp_jr >= 50 && user.user.xp_jr < 100) {
      this.medalCount += 1;
    }
  }

  jmMedal(user : any) {
    if (user.user.xp_jm == 150) {
      this.medalCount += 3;
    } else if (user.user.xp_jm >= 100 && user.user.xp_jm < 150) {
      this.medalCount += 2;
    } else if (user.user.xp_jm >= 50 && user.user.xp_jm < 100){
      this.medalCount += 1;
    }
  }

  calculateMedals() {
    for (var i = 0; i < this.users.length; i++) {     
      this.jiMedal(this.users[i]);
      this.jrMedal(this.users[i]);
      this.jmMedal(this.users[i]);
    }
  }
}