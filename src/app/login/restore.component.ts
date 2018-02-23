import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {
response: any;
  constructor(private activatedroute: ActivatedRoute) {

  }
  ngOnInit() {
    const url = window.location.href;
    console.log(url);
  }
}
