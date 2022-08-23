import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ft-prev',
  templateUrl: './ft-prev.component.html',
  styleUrls: ['./ft-prev.component.scss'],
})
export class FtPrevComponent implements OnInit {

  @Input() bg: string;
  @Input() bg_cft: string;

  constructor() { }

  ngOnInit() {}

}