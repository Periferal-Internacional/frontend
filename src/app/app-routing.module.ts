import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './_modules/auth/auth.component';
import { LandingComponent } from './_modules/landing/landing.component';

const routes: Routes = [
  {
    'path': '',
    'component': LandingComponent
  },
  {
    'path': 'auth',
    'component': AuthComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
