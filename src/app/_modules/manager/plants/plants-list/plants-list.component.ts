import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';

@Component({
  selector: 'plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit, OnChanges {
  data : any = [];
  @Input() refetch : Boolean = false;
  @Output() fetched = new EventEmitter<Boolean>();
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.refetch.currentValue == true) {
      this.fetchData();
      this.fetched.emit(true);
    }
  }

  fetchData() {
    this.api.getPipe("plants").subscribe(resp => {
      this.data = resp;
    });
  }

  deletePlant(id : number) {
    this.api.deletePipe("plants/" + id).subscribe(resp => {
      this.fetchData();
    });
  }
}
