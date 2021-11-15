import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-webpage-landing',
  templateUrl: './webpage-landing.page.html',
  styleUrls: ['./webpage-landing.page.scss'],
})
export class WebpageLandingPage implements OnInit {

  constructor() { }

  ngOnInit() {

    // scroll to top
    $(window).scroll(function() 
    {
      if ($(this).scrollTop() >= 50) 
      {        
        $('#return-to-top').fadeIn(200);    
      } 
      else 
      {
        $('#return-to-top').fadeOut(200);   
      }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });
    // /scroll to top

  }

}
