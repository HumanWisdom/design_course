import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveYourBestLifePageRoutingModule } from './live-your-best-life-routing.module';

import { LiveYourBestLifePage } from './live-your-best-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveYourBestLifePageRoutingModule
  ],
  declarations: [LiveYourBestLifePage]
})
export class LiveYourBestLifePageModule {}
