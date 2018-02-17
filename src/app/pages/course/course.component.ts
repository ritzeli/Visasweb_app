import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  constructor(private router: Router , private activateroute: ActivatedRoute ) {
    this.activateroute.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }


}
