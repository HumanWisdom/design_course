import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss'],
})
export class ImageTextComponent implements OnInit {

  @Input() base: string;
  @Input() overlay: string;

  constructor() { }

  ngOnInit() {
  }

}