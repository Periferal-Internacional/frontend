import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit, OnChanges {
  promJI = 0;
  promJR = 0;
  promJM = 0;
  mdpProm = 0;
  wasteProm = 0;
  formatProm = 0;
  opCertificados = 0;
  supCertificados = 0;
  user : any = localStorage.getItem("user");
  color = "";
  
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.fetchData();
    this.user = JSON.parse(this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }

  fetchData(){
    this.api.getPipe("users/" + localStorage.getItem('id')).subscribe(resp => {
      this.user = resp;
    });

    this.api.getPipe("users").subscribe(resp => {
      this.calculate(resp);
    })
  }

  calculate(data : any){
    let counter = 0;
    for(var i=0; i<data.length; i++) {
      if(!data[i].user.admin) {
        counter++;
      }
    }
    for(var i=0; i<data.length; i++) {
      if (!data[i].user.admin) {
        this.promJI += data[i].user.xp_ji;
        this.promJR += data[i].user.xp_jr;
        this.promJM += data[i].user.xp_jm;
        if(data[i].user.xp_ji == 150 && data[i].user.xp_jr == 150 && data[i].user.xp_jm == 150){
          this.supCertificados += (100/counter);
        }
      } 
    }
    
    var max = (counter * 150);
    this.promJI /= (max/100);
    this.promJR /= (max/100);
    this.promJM /= (max/100);

    this.mdpProm = (this.user.mdp_b4 - this.user.mdp_aft) / this.user.mdp_b4 * 100;
    this.wasteProm = (this.user.waste_b4 - this.user.waste_aft) / this.user.waste_b4 * 100;
    this.formatProm = (this.user.format_b4 - this.user.format_aft) / this.user.format_b4 * 100;
  }

  resetFormat() {
    this.format1 = (): string => this.supCertificados.toFixed(2).toString() + '%';
    this.format2 = (): string => ((this.user.cap_operators / this.user.total_operators) * 100).toString() + '%';
  }
  format1 = (): string => this.supCertificados.toFixed(2).toString() + '%';
  format2 = (): string => ((this.user.cap_operators / this.user.total_operators) * 100).toString() + '%';
}
