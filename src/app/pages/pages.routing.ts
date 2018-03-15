import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseComponent} from './course/course.component';
import {AgentComponent} from './agent/agent.component';
import {ChatBotComponent} from './chat-bot/chat-bot.component';
import {ProfileComponent} from './profile/profile.component';

export const routes_pages: Routes = [
  {path: 'dashboard', data: {title: 'Home', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Home'}]}, component: DashboardComponent },
  {path: 'courses',  data: {title: 'Cursos', urls: [{title: 'Home', url: '/dashboard'}, {title: 'cursos'}]}, component: CoursesComponent },
  {path: 'course/:id', data: {title: 'Curso', urls: [{title: 'Cursos', url: '/courses'}, {title: 'curso'}]}, component: CourseComponent },
  {path: 'agent', data: {title: 'Agentes', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Agentes'}]}, component: AgentComponent },
  {path: 'chat-bot', data: {title: 'Chat-bot', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Chat-bot'}]}, component: ChatBotComponent },
  {path: 'profile', data: {title: 'Profile', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Profile'}]}, component: ProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ];
