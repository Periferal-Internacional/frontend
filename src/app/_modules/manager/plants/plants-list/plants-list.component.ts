import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';

@Component({
  selector: 'plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {
  data : any = [];
  
  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.api.getPipe("plants").subscribe(resp => {
      this.data = resp;
      console.log(resp);
    });
  }

  deletePlant(id : number) {
    this.api.deletePipe("plants/" + id).subscribe(resp => {
      this.fetchData();
    });
  }
}
