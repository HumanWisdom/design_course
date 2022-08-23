import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
})
export class QuotationComponent implements OnInit {

  @Input() bg: string

  constructor() { }

  ngOnInit() {
  }

}