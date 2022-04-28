import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {
  promJI = 0; 
  promJR = 0; 
  promJM = 0; 
  opCertificados = 0;
  
  constructor(private api: ApiService){

  }

  fetchData(){
    this.api.getPipe("users").subscribe(resp => {
      this.calculate(resp);
    })
  }
  calculate(data : any){
    var max = (data.length * 150)
    for(var i=0; i<data.length; i++){
      this.promJI += data[i].user.xp_ji;
      this.promJR += data[i].user.xp_jr;
      this.promJM += data[i].user.xp_jm;
      if(data[i].user.xp_ji == 150 && data[i].user.xp_jr == 150 && data[i].user.xp_jm == 150){
        this.opCertificados += (100/data.length);
      }
    }
    
    this.promJI /= (max/100);
    this.promJR /= (max/100);
    this.promJM /= (max/100);
  }

  progress = 75;
  color = "";

  ngOnInit(): void {
    this.setColor();
    this.fetchData();
  }

  setColor() {
    if (this.progress < 50) {
      this.color = "red";
    } else if (this.progress >= 50 && this.progress <= 99) {
      this.color = "primary";
    } else {
      this.color = "success";
    }
  }

  format1 = (): string => this.opCertificados.toFixed(2).toString() + '%';
}
