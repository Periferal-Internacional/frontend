import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService} from '../../../_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.api.loginPipe(this.validateForm.value).subscribe((resp:any) => {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("id", resp.id);
        this.api.getPipe("users/"+resp.id).subscribe((resp:any) => {
          localStorage.setItem("user", JSON.stringify(resp));
          this.router.navigateByUrl('/dashboard');
        });
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

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
