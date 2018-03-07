import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/services.index';
import {ChatsmainService} from '../../services/services.index';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  messages = [{
    from: 'Nirav Joshi',
    email: 'info@wrappixel.com',
    date: 1427207139000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/2.jpg',
    icon: 'group',
    iconClass: 'mat-text-primary',
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>  <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n   <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Personal',
    type: 'danger',
    important: true,
    id: 1
  }, {
    from: 'Sunil Joshi',
    email: 'suniljoshi19@gmail.com',
    date: 1427412725000,
    subject: 'Download the freebies from the site wrappixel.com all the admin template for free',
    avatar: 'assets/images/users/1.jpg',
    icon: 'local_offer',
    iconClass: 'mat-text-warn',
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n\n        <blockquote>\n            <i>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n </blockquote> <div class="row"><div class="col-md-2"><a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img1.jpg"> </a></div><div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img2.jpg"> </a> </div> <div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img3.jpg"> </a> </div>',
    tag: 'Personal',
    type: 'success',
    important: false,
    id: 2
  }, {
    from: 'Vishal bhatt',
    email: 'info@vishal.com',
    date: 1427546580000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/3.jpg',
    icon: 'info',
    iconClass: 'mat-text-accent',
    body: '<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n\n        <blockquote>\n            <i>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n </blockquote> <div class="row"><div class="col-md-2"><a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img1.jpg"> </a></div><div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img2.jpg"> </a> </div> <div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img3.jpg"> </a> </div>',
    tag: 'Clients',
    type: 'info',
    important: false,
    id: 3
  }, {
    from: 'Hrithik roshan',
    email: 'info@hrithik.com',
    date: 1427891640000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/4.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Family',
    type: 'warning',
    important: true,
    id: 4
  }, {
    from: 'Genelia Deshmukh',
    email: 'info@genelia.com',
    date: 1428275520000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/5.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Friends',
    type: 'info',
    important: false,
    id: 5
  }, {
    from: 'Angelina Jolie',
    email: 'info@angelina.com',
    date: 1428830580000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/6.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Personal',
    type: 'success',
    important: false,
    id: 6
  }, {
    from: 'Govinda sumoy',
    email: 'info@genelia.com',
    date: 1429363920000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/1.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Personal',
    type: 'none',
    important: false,
    id: 7
  }, {
    from: 'Jonathan Deo',
    email: 'info@genelia.com',
    date: 1430274720000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/2.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Clients',
    type: 'none',
    important: false,
    id: 8
  }, {
    from: 'Sweety Shurty',
    email: 'info@genelia.com',
    date: 1431293520000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/3.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Family',
    type: 'success',
    important: false,
    id: 9
  }, {
    from: 'Kriti sanon',
    email: 'info@genelia.com',
    date: 1433115240000,
    subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/4.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Friends',
    type: 'info',
    important: true,
    id: 10
  }];
  constructor(public router: Router,
              public user_service: UserService,
              public chat_main_service: ChatsmainService) { }
   user_chat: any ;
  RoomG: any;
  RoomG_id: any;
  Users: any;
  ngOnInit() {
    this.user_service.user.subscribe(user => {
      this.user_chat = user;
      console.log(this.user_chat.User_id);
      this.user_service.Read_Users()
        .subscribe(Users => {
          console.log(Users);
          this.Users = Users;
        });
    });
  }
  onSelect(message) {
    const client_id = this.user_chat.User_id;
    const supplier_id = message.User_id;
    this.chat_main_service.ChatG_started(client_id, supplier_id);
  }
}
