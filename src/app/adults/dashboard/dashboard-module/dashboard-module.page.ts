import { Component, OnInit,OnDestroy,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.page.html',
  styleUrls: ['./dashboard-module.page.scss'],
})
export class DashboardModulePage implements OnInit {

  yellow="#FFC455"
  // @Input() audioLink: string;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/anger/audios/anger+1.1.mp3';

  constructor() { }

  ngOnInit() {
    
    // carousel multiple items increment by 1 - c1_w33
    // Add minus icon for collapse element which is open by default
    $('.c1_w33 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 3; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c1_w33

    // carousel multiple items increment by 1 - c2_w50
    // Add minus icon for collapse element which is open by default
    $('.c2_w50 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 2; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c2_w50

    // carousel multiple items increment by 1 - c3_w100
    // Add minus icon for collapse element which is open by default
    $('.c3_w100 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 1; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c3_w100

    // carousel multiple items increment by 1 - c1_w33_01
    // Add minus icon for collapse element which is open by default
    $('.c1_w33_01 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 6; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c1_w33_01

  }

}