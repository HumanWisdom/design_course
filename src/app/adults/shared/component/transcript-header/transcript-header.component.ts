import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-transcript-header',
  templateUrl: './transcript-header.component.html',
  styleUrls: ['./transcript-header.component.scss'],
})
export class TranscriptHeaderComponent implements OnInit {

  @Input() toc:string;
  
  constructor() { }

  ngOnInit() {
  }

}