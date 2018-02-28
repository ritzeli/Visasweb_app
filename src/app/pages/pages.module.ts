import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes_pages} from './pages.routing'
import {DashboardComponent} from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AgentComponent } from './agent/agent.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes_pages),
    ServicesModule
  ],
  declarations: [
    DashboardComponent,
    ChatComponent,
    CoursesComponent,
    CourseComponent,
    AgentComponent,
    ChatBotComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
