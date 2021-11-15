import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomStoriesLandingPageRoutingModule } from './wisdom-stories-landing-routing.module';

import { WisdomStoriesLandingPage } from './wisdom-stories-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomStoriesLandingPageRoutingModule
  ],
  declarations: [WisdomStoriesLandingPage]
})
export class WisdomStoriesLandingPageModule {}
