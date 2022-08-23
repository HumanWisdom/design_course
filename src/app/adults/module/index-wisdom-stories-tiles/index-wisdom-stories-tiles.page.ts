import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-wisdom-stories-tiles',
  templateUrl: './index-wisdom-stories-tiles.page.html',
  styleUrls: ['./index-wisdom-stories-tiles.page.scss'],
})
export class IndexWisdomStoriesTilesPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
  tocColor="grey"

  constructor() { }

  ngOnInit() {
  }

}
