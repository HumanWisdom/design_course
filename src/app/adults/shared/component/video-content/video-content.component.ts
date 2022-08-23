import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {

  @Input() bg: string;
  @Input() title: string;
  @Input() videoclass = '';
  @Input() poster: any;
  @Input() videoLink: any;

  constructor() { }

  ngOnInit() {
  }

}