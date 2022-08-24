import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tn-dashboard-v03',
  templateUrl: './tn-dashboard-v03.component.html',
  styleUrls: ['./tn-dashboard-v03.component.scss'],
})
export class TnDashboardV03Component implements OnInit {

  enableplaystore = false
  android = false;
  ios = false;
  isloggedIn = false;

  @Output() playstoreenable = new EventEmitter<boolean>();

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {}

  clickbanner(url = '') 
  {
    if (url === '') 
    {
      if (this.platform.IOS || this.platform.SAFARI) 
      {
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } 
      else if (this.platform.ANDROID) 
      {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } 
    else 
    {
      window.open(url)
    }
  }

  closeplaystore() 
  {
    this.enableplaystore = false;
    localStorage.setItem('enablebanner', 'F')
    this.playstoreenable.emit(false);
  }

  routedashboard() 
  {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  goToNotification() 
  {
    this.router.navigate(['adults/notification']);
  }

}
