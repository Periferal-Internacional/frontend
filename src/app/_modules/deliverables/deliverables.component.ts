import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEventType, HttpEvent, HttpResponse, HttpClient, HttpRequest } from '@angular/common/http';
import { ApiService } from 'src/app/_services/api.service';


@Component({
  selector: 'deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.css']
})
export class DeliverablesComponent implements OnInit {
  collapsed = false;
  validateForm!: FormGroup;
  formData = new FormData();
  constructor(private msg: NzMessageService, private fb: FormBuilder, private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      comment: [null],
      deliverable_type: [null, [Validators.required]],
    });
  }

  sendEvent() {
    this.collapsed = !this.collapsed;
  }
  
  submitForm(): void {
    if (this.validateForm.valid) {
      this.formData.append('user_id', localStorage.getItem('id')!);
      this.formData.append('name', this.validateForm.value.name);
      this.formData.append('comment', this.validateForm.value.comment);
      this.formData.append('deliverable_type', this.validateForm.value.deliverable_type);
      this.api.postPipe("deliverables", this.formData).subscribe(resp => {
        this.msg.success("Entregable creado con éxito");
      }, err => {
        this.msg.error("Error al crear el entregable");
      }
        );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} cargado con éxito.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} no fue cargado.`);
    }
  }

  upload = (item : NzUploadXHRArgs) => {
    this.formData.append('file', item.file as any); // tslint:disable-next-line:no-any
    const req = new HttpRequest('POST', item.action!, this.formData, {
      reportProgress : true,
      withCredentials: false
    });
    return this.http.request(req).subscribe((event: HttpEvent<unknown>) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total! > 0) {
          (event as any).percent = event.loaded / event.total! * 100; // tslint:disable-next-line:no-any
        }
        item.onProgress!(event, item.file);
      } else if (event instanceof HttpResponse) { /* success */
        item.onSuccess!(event.body, item.file, event);
      }
    },(err) => { /* error */
      item.onError!(err, item.file);
    });
  };
}