import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageReferFriendPageRoutingModule } from './webpage-refer-friend-routing.module';

import { WebpageReferFriendPage } from './webpage-refer-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageReferFriendPageRoutingModule
  ],
  declarations: [WebpageReferFriendPage]
})
export class WebpageReferFriendPageModule {}
