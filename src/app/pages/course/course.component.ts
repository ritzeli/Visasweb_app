import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
