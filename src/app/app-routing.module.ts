import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import {PagenotfoundComponent} from './error/pagenotfound/pagenotfound.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RestoreComponent} from './login/restore.component';

export const Approutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'restore/auth', component: RestoreComponent},
  {path: 'page-not-found', component: PagenotfoundComponent},
{
    path: '',
    component: FullComponent,
    loadChildren : './pages/pages.module#PagesModule'
},
{ path: '**', redirectTo: '/page-not-found'}];


