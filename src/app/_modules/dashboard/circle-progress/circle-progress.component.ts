import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {
  progress = 75;
  color = "";

  ngOnInit(): void {
    this.setColor();
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

  format1 = (): string => `MTY`;
  format2 = (): string => `CDMX`;
  format3 = (): string => `León`;
}
