import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {

  isloggedIn = false;
  subscriber = false;
  ios = false
  roleid = 0

  constructor(public platform: Platform) { }

  ngOnInit() {}

}
