import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexWisdomStoriesPageRoutingModule } from './index-wisdom-stories-routing.module';

import { IndexWisdomStoriesPage } from './index-wisdom-stories.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexWisdomStoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [IndexWisdomStoriesPage]
})
export class IndexWisdomStoriesPageModule {}
