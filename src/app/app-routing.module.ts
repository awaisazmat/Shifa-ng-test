import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-user', pathMatch: 'full' },
  { path: 'login-user', component: LoginpageComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'dummy', component: DummyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
