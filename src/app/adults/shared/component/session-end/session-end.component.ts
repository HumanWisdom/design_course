import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-session-end',
  templateUrl: './session-end.component.html',
  styleUrls: ['./session-end.component.scss'],
})

export class SessionEndComponent implements OnInit {

  @Input() bg: string;
  @Input() progressText: string;
  @Input() progressImg: string;
  @Input() progressPercent: number;
  @Input() link: string;
  @Input() name: string;
  @Input() toc: string;

  constructor() { }

  ngOnInit() {
  }

}