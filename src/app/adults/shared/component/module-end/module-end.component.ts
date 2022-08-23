import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-module-end',
  templateUrl: './module-end.component.html',
  styleUrls: ['./module-end.component.scss'],
})

export class ModuleEndComponent implements OnInit {

  @Input() bg: string;
  @Input() moduleImg: string;
  @Input() moduleName: string;
  @Input() sectionName: string;
  @Input() moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png',
      link: '/breathing'
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/08.png',
      link: '/noticing-thoughts'
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/10.png',
      link: '/guided-meditation'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}