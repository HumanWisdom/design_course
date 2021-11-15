import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stress-img-audio',
  templateUrl: './stress-img-audio.page.html',
  styleUrls: ['./stress-img-audio.page.scss'],
})
export class StressImgAudioPage implements OnInit {

  bg="stress_overlay3"  
  // title="Exploring anger" 
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/anger/audios/anger+1.1.mp3'

  constructor() { }

  ngOnInit() {
  }

}
