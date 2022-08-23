import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomStoriesStoryPageRoutingModule } from './wisdom-stories-story-routing.module';

import { WisdomStoriesStoryPage } from './wisdom-stories-story.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomStoriesStoryPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomStoriesStoryPage]
})
export class WisdomStoriesStoryPageModule {}
