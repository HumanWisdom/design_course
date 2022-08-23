import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc-audio-title',
  templateUrl: './toc-audio-title.page.html',
  styleUrls: ['./toc-audio-title.page.scss'],
})
export class TocAudioTitlePage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature.jpg"
  tocColor="white"

  constructor() { }

  ngOnInit() {
  }

}
