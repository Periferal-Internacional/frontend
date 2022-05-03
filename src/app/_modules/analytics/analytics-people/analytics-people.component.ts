import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../_services/api.service';

@Component({
  selector: 'analytics-people',
  templateUrl: './analytics-people.component.html'
})
export class AnalyticsPeopleComponent implements OnInit {
  users: any[] = [];
  deliverables: any[] = [];
  visible = false;
  expandSet = new Set<number>();
  chosenUser = { "user": { "id": 0, "name": "", "lastName1": "" }, "plant": {} };
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  open(type: string, user: any): void {
    this.chosenUser = user;
    this.getDeliverables(type);
    this.visible = true;
  }

  close(): void {
    this.deliverables = [];
    this.visible = false;
  }

  fetchData() {
    this.api.getPipe("users").subscribe((resp: any) => {
      for (var i = 0; i < resp.length; i++) {
        if (!resp[i].user.admin) {
          this.users.push(resp[i]);
        }
      }
    });
  }

  getDeliverables(type: string) {
    this.api.getPipe("deliverables?deliverable_type=" + type + "&user_id=" + this.chosenUser.user.id).subscribe((resp: any) => {
      for (var i = 0; i < resp.length; i++) {
        this.deliverables.push(resp[i]);
      }
    });
  }

  getColor(xp: number) {
    if (xp < 100) {
      return "brown";
    } else if (xp < 150) {
      return "silver";
    } else {
      return "gold";
    }
  }
}
