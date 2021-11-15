import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageProfilePageRoutingModule } from './webpage-profile-routing.module';

import { WebpageProfilePage } from './webpage-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageProfilePageRoutingModule
  ],
  declarations: [WebpageProfilePage]
})
export class WebpageProfilePageModule {}
