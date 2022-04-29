import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      cap_operators: [null, [Validators.required]],
    });
  }

  submitForm(): void {
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
