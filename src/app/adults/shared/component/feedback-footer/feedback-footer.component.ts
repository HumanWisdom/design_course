import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-feedback-footer',
  templateUrl: './feedback-footer.component.html',
  styleUrls: ['./feedback-footer.component.scss'],
})
export class FeedbackFooterComponent implements OnInit {

  @Input() bg: string;

  constructor() { }

  ngOnInit() {
  }

}