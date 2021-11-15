import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-s5circles-rc',
  templateUrl: './introduction-s5circles-rc.page.html',
  styleUrls: ['./introduction-s5circles-rc.page.scss'],
})
export class IntroductionS5circlesRcPage implements OnInit {

  bg="purple_blue_w9"  
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/conditioning/audios/con+3.1.mp3'
  title="5 circles of wisdom"
  colours=["btn_5circles_01"," btn_5circles_02"," btn_5circles_03"," btn_5circles_04"," btn_5circles_05 disabled"]
  text=["A","B","C","D","E"]

  constructor() { }

  ngOnInit() {
  }

}
