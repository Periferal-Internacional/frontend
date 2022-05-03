import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from '../../../_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
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
  chosenDocument : any;
  grade : number = 0;
  isVisible = false;
  constructor(
    private api: ApiService,
    private msg: NzMessageService,
    private router: Router
  ) { }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

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
    this.users = [];
    this.api.getPipe("users").subscribe((resp: any) => {
      for (var i = 0; i < resp.length; i++) {
        if (!resp[i].user.admin) {
          this.users.push(resp[i]);
        }
      }
    });
  }
  
  showModal(document : any): void {
    this.isVisible = true;
    this.chosenDocument = document;
  }

  download(document : any): void {
    window.open(document.url, '_blank');
  }

  handleOk(): void {
    let request: any = {
      "grade": this.grade
    }
    this.api.putPipe("deliverables/" + this.chosenDocument.id, request).subscribe((resp: any) => {
      this.msg.success("Entregable calificado exitosamente");
      this.grade = 0;
      this.chosenDocument = {};
      this.getDeliverables(this.chosenDocument.deliverable_type);
      this.isVisible = false;
    } , err => {
      this.msg.error("El entregable no pudo ser calificado. Inténtalo más tarde");
    });
  }

  handleCancel(): void {
    this.chosenDocument = {};
    this.isVisible = false;
  }


  getDeliverables(type: string) {
    this.deliverables = [];
    this.api.getPipe("deliverables?deliverable_type=" + type + "&user_id=" + this.chosenUser.user.id).subscribe((resp: any) => {
        this.deliverables = resp;
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
