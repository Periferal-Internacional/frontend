import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit, OnChanges {
  data : any = [];
  @Input() refetch : Boolean = false;
  @Output() fetched = new EventEmitter<Boolean>();
  @Output() plantId = new EventEmitter<string>();
  expandSet = new Set<number>();
  
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(
    private api : ApiService,
    private msg : NzMessageService
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
      this.msg.success("Planta eliminada correctamente");
      this.fetchData();
    }, err => {
      this.msg.error("No se pudo eliminar la planta, inténtelo más tarde");
    });
  }

  edit(id : any) {
    this.plantId.emit(id);
  }
}
