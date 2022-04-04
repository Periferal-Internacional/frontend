import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantsFormComponent } from './plants-form/plants-form.component';


@NgModule({
  declarations: [
    PlantsComponent,
    PlantsListComponent,
    PlantsFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlantsComponent,
    PlantsListComponent,
    PlantsFormComponent
  ]
})
export class PlantsModule { }
