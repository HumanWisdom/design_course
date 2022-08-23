import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-end-related-modules',
  templateUrl: './module-end-related-modules.page.html',
  styleUrls: ['./module-end-related-modules.page.scss'],
})
export class ModuleEndRelatedModulesPage implements OnInit {

  bg="";
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/fear_anxiety.jpg"
  moduleName="Fear & Anxiety "
  sectionName= "Understand Emotions";
  moduleList: any = [
    {
      name: 'Reactive mind',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/22.png',
      link: '/reactive-mind'
    },
    {
      name: 'Stress',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Relationships',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/vectorless/35.png',
      link: '/relationships'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
