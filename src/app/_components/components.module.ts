import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
import { RouterModule } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [
    NavbarComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , NzMenuModule
    , NzIconModule
    , NzToolTipModule
    , NzListModule
    , NzProgressModule
  ],
  exports: [
    NavbarComponent, 
    LeaderboardComponent]
})
export class ComponentsModule { }
