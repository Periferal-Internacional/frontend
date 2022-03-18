import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  tabs : string[] = [];
  users : any[] = [];
  percentages: number[] = [100, 75, 64, 47, 15];
  constructor(
    private api : ApiService
  ) { }

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
    this.getData();
  }

  getData() {
    this.api.getPipe('users').subscribe(resp => {
      this.parse(resp);
    }, err => {
      console.log(err.message);
    });
  }

  parse(information : any) {
    if (this.tabs[0] == "Dashboard") {
      for (var i = 0; i < 3; i++) {
        this.users.push(information[i]);
      }
    } else {
      for  (var i = 0; i < information.length; i++) {
        this.users.push(information[i]);
      }
    }
  }

  getColor(i : number) {
    if(this.percentages[i] < 50) {
      return "red";
    } else {
      return "primary";
    }
  }

}
