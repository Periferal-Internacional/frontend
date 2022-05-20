import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService} from '../../../_services/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  @Output() tabEmitter = new EventEmitter<any>();
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private msg: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.api.loginPipe(this.validateForm.value).subscribe((resp:any) => {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("id", resp.id);
        this.setUser(resp.id);
      }, (err:any) => {
        this.msg.error("Correo o contraseña incorrectos");
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


  setUser(id : string) {
    this.api.getPipe("users/"+id).subscribe((resp:any) => {
      localStorage.setItem("user", JSON.stringify(resp));
      this.tabEmitter.emit("dashboard");
      this.router.navigateByUrl('/dashboard');
    });
  }
}
