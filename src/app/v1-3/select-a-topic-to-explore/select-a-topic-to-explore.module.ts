import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectATopicToExplorePageRoutingModule } from './select-a-topic-to-explore-routing.module';

import { SelectATopicToExplorePage } from './select-a-topic-to-explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectATopicToExplorePageRoutingModule
  ],
  declarations: [SelectATopicToExplorePage]
})
export class SelectATopicToExplorePageModule {}
