import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-audio-content',
  templateUrl: './audio-content.component.html',
  styleUrls: ['./audio-content.component.scss'],
})
export class AudioContentComponent implements OnInit {

  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;

  constructor() { }

  ngOnInit() {
  }

}