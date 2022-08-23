import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.scss'],
})
export class CourseFooterComponent implements OnInit {

  @Input() bg: string;
  @Input() bg_cft: string;
  shared=false

  constructor() { }

  ngOnInit() {
  }

}