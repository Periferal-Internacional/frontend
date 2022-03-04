import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, 
    LeaderboardComponent]
})
export class ComponentsModule { }
