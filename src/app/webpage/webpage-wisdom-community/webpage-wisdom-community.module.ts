import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageWisdomCommunityPageRoutingModule } from './webpage-wisdom-community-routing.module';

import { WebpageWisdomCommunityPage } from './webpage-wisdom-community.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageWisdomCommunityPageRoutingModule
  ],
  declarations: [WebpageWisdomCommunityPage]
})
export class WebpageWisdomCommunityPageModule {}
