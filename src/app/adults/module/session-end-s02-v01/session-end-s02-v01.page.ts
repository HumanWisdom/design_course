import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-end-s02-v01',
  templateUrl: './session-end-s02-v01.page.html',
  styleUrls: ['./session-end-s02-v01.page.scss'],
})
export class SessionEndS02V01Page implements OnInit {

  bg="teal_w1"
  progressText="1/3"
  progressImg=""
  progressPercent:"25%"
  link="/adults/anger/s179"
  name="#2  The nature of anger"
  toc="anger/s162p0"

  constructor() { }

  ngOnInit() {
  }

}
