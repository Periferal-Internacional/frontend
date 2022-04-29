import { ThrowStmt } from '@angular/compiler';
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
  usuarios : any[] = [];
  percentages: any[] = [];
  xpLista: number[] = [];
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
      var topUsers = [information[0], information[1], information[2]];
      for (var i = 3; i < information.length; i++) {
        if(this.getTotalXP(information[i]) > this.getTotalXP(topUsers[0])){
          topUsers[0] = information[i];
        }else if(this.getTotalXP(information[i]) > this.getTotalXP(topUsers[1]) && this.getTotalXP(information[i]) <= this.getTotalXP(topUsers[0])){
          topUsers[1] = information[i];
        }else if(this.getTotalXP(information[i]) > this.getTotalXP(topUsers[2]) && this.getTotalXP(information[i]) <= this.getTotalXP(topUsers[1])){
          topUsers[2] = information[i];
        } 
      }

      this.percentages[0] = (this.getTotalXP(topUsers[0]) / 4.5).toFixed(1);
      this.percentages[1] = (this.getTotalXP(topUsers[1]) / 4.5).toFixed(1);
      this.percentages[2] = (this.getTotalXP(topUsers[2]) / 4.5).toFixed(1);

      console.log(topUsers);
      this.users = topUsers;

    } else {
      for  (var i = 0; i < information.length; i++) {
        this.users.push(information[i]);
      }
    }
    
  }

  getTotalXP(user : any) {
    return user.user.xp_jr + user.user.xp_jm + user.user.xp_ji;
  }

  getColor(i : number) {
    if(this.percentages[i] < 50) {
      return "red";
    } else {
      return "primary";
    }
  }

}
