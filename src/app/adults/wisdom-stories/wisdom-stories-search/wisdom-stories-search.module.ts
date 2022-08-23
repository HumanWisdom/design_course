import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomStoriesSearchPageRoutingModule } from './wisdom-stories-search-routing.module';

import { WisdomStoriesSearchPage } from './wisdom-stories-search.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomStoriesSearchPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomStoriesSearchPage]
})
export class WisdomStoriesSearchPageModule {}
