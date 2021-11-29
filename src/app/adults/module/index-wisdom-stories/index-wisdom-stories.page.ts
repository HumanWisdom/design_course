import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-wisdom-stories',
  templateUrl: './index-wisdom-stories.page.html',
  styleUrls: ['./index-wisdom-stories.page.scss'],
})
export class IndexWisdomStoriesPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
  tocColor="grey"

  constructor() { }

  ngOnInit() {
  }

}
