import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-s5circles',
  templateUrl: './introduction-s5circles.page.html',
  styleUrls: ['./introduction-s5circles.page.scss'],
})
export class IntroductionS5circlesPage implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w1"
  title="Exploring anger"
  audioLink="/anger/audios/anger+1.1.mp3"
  colours=[
            "btn_5circles_01",
            "btn_5circles_02",
            "btn_5circles_03",
            "btn_5circles_04",
            "btn_5circles_05"
          ]
  text=[
        "Nurture a quiet mind",
        "Art of enquiry",
        "How the mind works",
        "Anger",
        "Living with wisdom"
      ]

  constructor() { }

  ngOnInit() {
  }

}