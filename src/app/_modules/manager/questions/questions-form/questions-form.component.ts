import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Boolean>();
  @Input() id: string = "";
  validateForm!: FormGroup;
  buttonText = "";
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    if (this.id == "") {
      this.validateForm = this.fb.group({
        prompt: [null, [Validators.required]],
        question_type: [null, [Validators.required]],
        xp: [null, [Validators.required]],
        right_answer: [null, [Validators.required]],
        game_over_message: [null, [Validators.required]],
      });
      this.addField();
      this.buttonText = "Crear pregunta";
    } else {
      this.fetchData();
      this.buttonText = "Editar pregunta";
    }
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
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  fetchData() {
    this.api.getPipe("questions/" + this.id).subscribe((resp: any) => {
      this.validateForm = this.fb.group({
        prompt: [resp.prompt, [Validators.required]],
        question_type: [resp.question_type, [Validators.required]],
        xp: [resp.xp, [Validators.required]],
        right_answer: [resp.right_answer, [Validators.required]],
        game_over_message: [resp.game_over_message, [Validators.required]],
      });
      for (var i = 0; i < resp.answers.length; i++) {
        this.addField();
        this.validateForm.controls[`answer${i}`].setValue(resp.answers[i]);
      }
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.validateForm.value.answers = [];

      // GET ANSWERS IN 1 ARRAY
      for (var i = 0; i < this.listOfControl.length; i++) {
        this.validateForm.value.answers.push(this.validateForm.value[`answer${i}`]);
        delete this.validateForm.value[`answer${i}`];
      }
      this.validateForm.value.answers = this.shuffle(this.validateForm.value.answers);

      if (this.id == "") {
        this.api.postPipe("questions", this.validateForm.value).subscribe(resp => {
          this.msg.success("Pregunta creada exitosamente");
          this.onSubmit.emit(true);
        }, err => {
          this.msg.error("No se pudo crear la pregunta, inténtalo más tarde");
        });
      } else {
        this.api.putPipe("questions/" + this.id, this.validateForm.value).subscribe(resp => {
          this.msg.success("Pregunta editada exitosamente");
          this.onSubmit.emit(true);
          this.id = "";
        }, err => {
          this.msg.error("No se pudo editar la pregunta, inténtalo más tarde");
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

  shuffle(array: any) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}
