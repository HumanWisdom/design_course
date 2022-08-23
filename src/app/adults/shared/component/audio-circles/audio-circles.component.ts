import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-audio-circles',
  templateUrl: './audio-circles.component.html',
  styleUrls: ['./audio-circles.component.scss'],
})
export class AudioCirclesComponent implements OnInit {

  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;

  constructor() { }

  ngOnInit() {
  }

}