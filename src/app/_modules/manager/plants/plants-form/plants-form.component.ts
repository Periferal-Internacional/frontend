import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() id: string = "";
  buttonText = "";

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };


  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id == "") {
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]],
        city: [null, [Validators.required]],
        country: [null, [Validators.required]],
      });
      this.buttonText = "Crear planta";
    } else {
      this.buttonText = "Editar planta";
      this.fetchData();
    }
  }

  fetchData() {
    this.api.getPipe("plants/" + this.id).subscribe((resp: any) => {
      this.validateForm = this.fb.group({
        name: [resp.name, [Validators.required]],
        city: [resp.city, [Validators.required]],
        country: [resp.country, [Validators.required]],
      });
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      if (this.id == "") {
        this.api.postPipe("plants", this.validateForm.value).subscribe(resp => {
          this.msg.success("Planta creada exitosamente");
          this.onSubmit.emit(true);
        }, err => {
          this.msg.error("No se pudo crear la planta, inténtelo más tarde");
        });
      } else {
        this.api.putPipe("plants/" + this.id, this.validateForm.value).subscribe(resp => {
          this.msg.success("Planta editada exitosamente");
          this.onSubmit.emit(true);
          this.id = "";
        }, err => {
          this.msg.error("No se pudo editar la planta, inténtelo más tarde");
        });
      }
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
