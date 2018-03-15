import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/services.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User: any = [];
  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.user_service.user.subscribe(res => {
      this.User = res;
    });
  }

}
