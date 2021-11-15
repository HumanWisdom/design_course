import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomStoriesStorySubmitPageRoutingModule } from './wisdom-stories-story-submit-routing.module';

import { WisdomStoriesStorySubmitPage } from './wisdom-stories-story-submit.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomStoriesStorySubmitPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomStoriesStorySubmitPage]
})
export class WisdomStoriesStorySubmitPageModule {}
