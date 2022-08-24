import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-resume',
  templateUrl: './podcast-resume.page.html',
  styleUrls: ['./podcast-resume.page.scss'],
})
export class PodcastResumePage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/01_a.jpg"
  tocColor="white"

  constructor() { }

  ngOnInit() {
  }

}
