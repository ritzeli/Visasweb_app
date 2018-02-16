import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import {PagenotfoundComponent} from './error/pagenotfound/pagenotfound.component';

export const Approutes: Routes = [
  {path: 'page-not-found', component: PagenotfoundComponent},
{
    path: '',
    component: FullComponent,
    loadChildren : './pages/pages.module#PagesModule'
},
{ path: '**', redirectTo: '/page-not-found'}];


