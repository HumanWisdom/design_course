import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-start',
  templateUrl: './podcast-start.page.html',
  styleUrls: ['./podcast-start.page.scss'],
})
export class PodcastStartPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/01_a.jpg"
  tocColor="white"

  constructor() { }

  ngOnInit() {
  }

}
