import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc-resume',
  templateUrl: './toc-resume.page.html',
  styleUrls: ['./toc-resume.page.scss'],
})
export class TocResumePage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/anger.png"
  tocColor="white"

  constructor() { }

  ngOnInit() {
  }

}
