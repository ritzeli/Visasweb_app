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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes_pages),
    ServicesModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ChatComponent,
    CoursesComponent,
    CourseComponent,
    AgentComponent,
    ChatBotComponent,
    ProfileComponent,
    PricingComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
