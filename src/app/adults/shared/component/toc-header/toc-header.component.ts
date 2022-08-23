import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-toc-header',
  templateUrl: './toc-header.component.html',
  styleUrls: ['./toc-header.component.scss'],
})
export class TocHeaderComponent implements OnInit {

  @Input() tocImage: string;
  @Input() tocColor: string;

  constructor() { }

  ngOnInit() {
  }

}