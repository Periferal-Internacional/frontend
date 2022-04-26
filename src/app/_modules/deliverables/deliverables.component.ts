import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
    selector: 'deliverables',
    templateUrl: './deliverables.component.html',
    styleUrls: ['./deliverables.component.css']
})
export class DeliverablesComponent implements OnInit {
    constructor(private msg: NzMessageService) {}

    ngOnInit(): void {
        
    }

    handleChange({ file, fileList }: NzUploadChangeParam): void {
        const status = file.status;
        if (status !== 'uploading') {
          console.log(file, fileList);
        }
        if (status === 'done') {
          this.msg.success(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          this.msg.error(`${file.name} file upload failed.`);
        }
    }

}