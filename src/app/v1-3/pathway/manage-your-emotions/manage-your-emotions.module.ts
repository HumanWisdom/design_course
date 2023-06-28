import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageYourEmotionsPageRoutingModule } from './manage-your-emotions-routing.module';

import { ManageYourEmotionsPage } from './manage-your-emotions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageYourEmotionsPageRoutingModule
  ],
  declarations: [ManageYourEmotionsPage]
})
export class ManageYourEmotionsPageModule {}
