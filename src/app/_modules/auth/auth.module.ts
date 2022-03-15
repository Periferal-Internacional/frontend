import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [AuthComponent, AuthLoginComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [
    AuthComponent,
    AuthLoginComponent
  ]
})
export class AuthModule { }
