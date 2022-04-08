import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../_services/api.service';

@Component({
  selector: 'questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  data : Array<any> = [];
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
    this.api.getPipe("questions").subscribe((resp : {[key: string] : any}) => {
      this.data = resp.questions;
    });
  }

  deleteQuestion(id : number) {
    this.api.deletePipe("questions/" + id).subscribe(resp => {
      this.fetchData();
    });
  }
}
