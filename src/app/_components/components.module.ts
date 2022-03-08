import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    NavbarComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule
    ,NzMenuModule
  ],
  exports: [
    NavbarComponent, 
    LeaderboardComponent]
})
export class ComponentsModule { }
