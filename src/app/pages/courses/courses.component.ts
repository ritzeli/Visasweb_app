import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: []
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  course(idx) {
    this.router.navigate(['/course', idx]).then();
  }
}
