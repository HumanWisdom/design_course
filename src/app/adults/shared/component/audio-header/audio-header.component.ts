import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-audio-header',
  templateUrl: './audio-header.component.html',
  styleUrls: ['./audio-header.component.scss'],
})
export class AudioHeaderComponent implements OnInit {

  @Input() bg_tn: string;

  constructor() { }

  ngOnInit() {
  }

}