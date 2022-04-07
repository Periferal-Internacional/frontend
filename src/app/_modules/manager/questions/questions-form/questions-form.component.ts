import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../_services/api.service';

@Component({
  selector: 'questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Boolean>();

  validateForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(
    private fb : FormBuilder,
    private api : ApiService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      prompt: [null, [Validators.required]],
      question_type: [null, [Validators.required]],
      xp: [null, [Validators.required]],
    });

    this.addField();
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `answer${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.validateForm.value.answers = [];

      // GET ANSWERS IN 1 ARRAY
      for (var i = 0; i < this.listOfControl.length; i++) {
        this.validateForm.value.answers.push(this.validateForm.value[`answer${i}`]);
        delete this.validateForm.value[`answer${i}`];
      }
      this.validateForm.value.right_answer = "probando";
      this.api.postPipe("questions", this.validateForm.value).subscribe(resp => {
        this.onSubmit.emit(true);
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
