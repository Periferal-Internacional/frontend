import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    NavbarComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule
    , NzMenuModule
    , NzIconModule
    , NzToolTipModule
  ],
  exports: [
    NavbarComponent, 
    LeaderboardComponent]
})
export class ComponentsModule { }
