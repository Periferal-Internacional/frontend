import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.css']
})
export class KPIsComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      cap_operators: [null, [Validators.required]],
      total_operators: [null, [Validators.required]],
      mdp_b4: [null, [Validators.required]],
      mdp_aft: [null, [Validators.required]],
      waste_b4: [null, [Validators.required]],
      waste_aft: [null, [Validators.required]],
      format_b4: [null, [Validators.required]],
      format_aft: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    if (this.validateForm.valid) {
      this.api.putPipe("users/" + localStorage.getItem("id"), this.validateForm.value).subscribe(resp => {
        console.log(resp);
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
