import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../_services/api.service';

@Component({
  selector: 'analytics-people',
  templateUrl: './analytics-people.component.html'
})
export class AnalyticsPeopleComponent implements OnInit {
  users : any[] = [];
  plants = ["Monterrey", "Leon", "CDMX", "Monterrey", "Monterrey"]
  constructor(
    private api : ApiService
  ) {}
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getPipe("users").subscribe(resp => {
      this.parse(resp);
    })
  }

  parse(information : any) {
    for (var i = 0; i < information.length; i++) {
      this.users.push(information[i]);
    }
    console.log(this.users);
  }
  // listOfData: Person[] = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   }
  // ];
}
