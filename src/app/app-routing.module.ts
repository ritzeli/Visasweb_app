import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import {PagenotfoundComponent} from './error/pagenotfound/pagenotfound.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RestoreComponent} from './login/restore.component';
import {ChatsVisaswebComponent} from './chats-visasweb/chats-visasweb.component';
import {ChatsMainComponent} from './chats-main/chats-main.component';
import {ChatsTranslationComponent} from './chats-translation/chats-translation.component';
// guards
import {LoginGuard} from './services/services.index';

export const Approutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'restore/auth', component: RestoreComponent},
  {path: 'page-not-found', component: PagenotfoundComponent},
  {path: 'main-chat/:id_one/:id_two/:id_Room', component: ChatsMainComponent, canActivate: [ LoginGuard ]},
  {path: 'main-translation/:id_one/:id_two/:id_Room', component: ChatsTranslationComponent, canActivate: [ LoginGuard ]},
  {path: 'info-chat', component: ChatsVisaswebComponent, canActivate: [ LoginGuard ]},
{
    path: '',
    component: FullComponent,
    canActivate: [ LoginGuard ],
    loadChildren : './pages/pages.module#PagesModule',
},
{ path: '**', redirectTo: '/page-not-found'}];


