import { Component, AfterViewInit ,OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {UserService} from '../../services/user/user.service';

declare var $: any;
@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit, OnInit {
  name: string;
  User: any = [];
  ban_menu = false;
  menu_close: string = 'ti-menu';
  member:any = 'Basica (Gratuita)';
  	public config: PerfectScrollbarConfigInterface = {};
  	constructor(private modalService: NgbModal, private user_service: UserService ) {
    }
    // This is for Notifications
    notifications: Object[] = [{
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    }, {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    }, {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    }, {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }];
    // This is for Mymessages
    mymessages: Object[] = [{
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    }, {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    }, {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    }, {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }];

    ngOnInit(){
      this.user_service.user.subscribe(res =>{
        this.User = res;
        console.log(this.User);
      });

    }

    ngAfterViewInit() {
        var set = function() {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                $("#main-wrapper").addClass("mini-sidebar");
            } else {
                $("#main-wrapper").removeClass("mini-sidebar");
            }
        };
        $(window).ready(set);
        $(window).on("resize", set);
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });
        $("body").trigger("resize");
    }

  public main_menu() {
      if (this.ban_menu === false) {
         this.menu_close = 'mdi mdi-close';
         return this.ban_menu = true;
      }
      if(this.ban_menu === true) {
        this.menu_close = 'ti-menu';
        return this.ban_menu = false;
      }
  }
  Logout_off() {
      this.user_service.logout_visasweb();
    }
}
