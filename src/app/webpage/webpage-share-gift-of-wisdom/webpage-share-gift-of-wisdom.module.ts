import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageShareGiftOfWisdomPageRoutingModule } from './webpage-share-gift-of-wisdom-routing.module';

import { WebpageShareGiftOfWisdomPage } from './webpage-share-gift-of-wisdom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageShareGiftOfWisdomPageRoutingModule
  ],
  declarations: [WebpageShareGiftOfWisdomPage]
})
export class WebpageShareGiftOfWisdomPageModule {}
