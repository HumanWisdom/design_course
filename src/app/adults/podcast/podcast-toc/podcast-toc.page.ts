import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-toc',
  templateUrl: './podcast-toc.page.html',
  styleUrls: ['./podcast-toc.page.scss'],
})
export class PodcastTocPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/podcast_landing.svg"
  tocColor="white"

  constructor() { }

  ngOnInit() {
  }

}
