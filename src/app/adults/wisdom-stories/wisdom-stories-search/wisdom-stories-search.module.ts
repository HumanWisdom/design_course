import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomStoriesSearchPageRoutingModule } from './wisdom-stories-search-routing.module';

import { WisdomStoriesSearchPage } from './wisdom-stories-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomStoriesSearchPageRoutingModule
  ],
  declarations: [WisdomStoriesSearchPage]
})
export class WisdomStoriesSearchPageModule {}
