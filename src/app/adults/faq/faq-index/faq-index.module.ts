import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqIndexPageRoutingModule } from './faq-index-routing.module';

import { FaqIndexPage } from './faq-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqIndexPageRoutingModule
  ],
  declarations: [FaqIndexPage]
})
export class FaqIndexPageModule {}
