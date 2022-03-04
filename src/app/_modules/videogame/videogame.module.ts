import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameComponent } from './videogame.component';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  declarations: [
    VideogameComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    VideogameComponent
  ]
})
export class VideogameModule { }
