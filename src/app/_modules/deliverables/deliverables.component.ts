import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'deliverables',
    templateUrl: './deliverables.component.html',
    styleUrls: ['./deliverables.component.css']
})
export class DeliverablesComponent implements OnInit {

    isHovering: boolean;
    files: File[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    onDrop(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            console.log('deliverables adding file: ', files.item(i));
            this.files.push(files.item(i));
        }
    }

}
