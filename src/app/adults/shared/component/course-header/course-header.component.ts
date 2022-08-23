import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss'],
})
export class CourseHeaderComponent implements OnInit {

  @Input() bg: string;
  @Input() bg_tn: string;
  shared=false

  constructor() { }

  ngOnInit() {
  }

}