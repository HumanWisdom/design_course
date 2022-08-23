import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  title="What is the root cause of anger?"
  poster="https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/video_posters/anger/anger_01.jpg"
  bg="teal_w1"
  videoLink="/anger/videos/1.1.mp4"

  constructor() { }

  ngOnInit() {
  }

}
