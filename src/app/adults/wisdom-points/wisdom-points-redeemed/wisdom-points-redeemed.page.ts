import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisdom-points-redeemed',
  templateUrl: './wisdom-points-redeemed.page.html',
  styleUrls: ['./wisdom-points-redeemed.page.scss'],
})
export class WisdomPointsRedeemedPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/tiles/wisdom_points/wisdom_points_redeem_hwp_02.svg"
  tocColor="grey"

  constructor() { }

  ngOnInit() {
  }

}
