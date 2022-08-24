import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisdom-points-reward-redeem',
  templateUrl: './wisdom-points-reward-redeem.page.html',
  styleUrls: ['./wisdom-points-reward-redeem.page.scss'],
})
export class WisdomPointsRewardRedeemPage implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/tiles/wisdom_points/wisdom_points_redeem_hwp_02.svg"
  tocColor="grey"

  constructor() { }

  ngOnInit() {
  }

}
