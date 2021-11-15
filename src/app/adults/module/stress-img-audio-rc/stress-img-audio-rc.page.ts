import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stress-img-audio-rc',
  templateUrl: './stress-img-audio-rc.page.html',
  styleUrls: ['./stress-img-audio-rc.page.scss'],
})
export class StressImgAudioRcPage implements OnInit {

  bg="stress_overlay3"  
  // title="Exploring anger" 
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/anger/audios/anger+1.1.mp3'

  constructor() { }

  ngOnInit() {
  }

}
