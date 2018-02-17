import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseComponent} from './course/course.component';

export const routes_pages: Routes = [
  {path: 'dashboard', data: {title: 'Home', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Home'}]}, component: DashboardComponent },
  {path: 'courses',  data: {title: 'Cursos', urls: [{title: 'Home', url: '/dashboard'}, {title: 'cursos'}]}, component: CoursesComponent },
  {path: 'course/:id', data: {title: 'Curso', urls: [{title: 'Cursos', url: '/courses'}, {title: 'curso'}]}, component: CourseComponent },
  {path: 'chat-bot', data: {title: 'Chat-bot', urls: [{title: 'Home', url: '/dashboard'}, {title: 'Chat-bot'}]}, component: ChatComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ];
