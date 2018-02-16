import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';

export const routes_pages: Routes = [
  {path: 'dashboard',
    data: {title: 'Home', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Home'}]}
    , component: DashboardComponent },
  {path: 'chat-bot',
    data: {title: 'Chat-bot', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Chat-bot'}]}
    , component: ChatComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ];
