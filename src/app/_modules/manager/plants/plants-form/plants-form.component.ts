import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { ApiService } from '../../../../_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'plants-form',
  templateUrl: './plants-form.component.html',
  styleUrls: ['./plants-form.component.css']
})
export class PlantsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Boolean>();

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  
  constructor(
    private fb : FormBuilder,
    private api : ApiService,
    private msg : NzMessageService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.api.postPipe("plants", this.validateForm.value).subscribe(resp => {
        this.msg.success("Planta creada exitosamente");
        this.onSubmit.emit(true);
      }, err => {
        this.msg.error("No se pudo crear la planta, inténtelo más tarde");
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
