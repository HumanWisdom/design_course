import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderstandHowYourMindWorksPageRoutingModule } from './understand-how-your-mind-works-routing.module';

import { UnderstandHowYourMindWorksPage } from './understand-how-your-mind-works.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderstandHowYourMindWorksPageRoutingModule
  ],
  declarations: [UnderstandHowYourMindWorksPage]
})
export class UnderstandHowYourMindWorksPageModule {}
