import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-adverts-about',
  templateUrl: './adverts-about.page.html',
  styleUrls: ['./adverts-about.page.scss'],
})
export class AdvertsAboutPage implements OnInit {

  constructor( private router: Router,
    private platform: Platform) { }

  ngOnInit() {
  }
  routedashboard() 
  {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  clickbanner(url = '') 
  {
  }
}
