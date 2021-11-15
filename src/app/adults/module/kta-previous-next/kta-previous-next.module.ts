import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextPageRoutingModule } from './kta-previous-next-routing.module';

import { KtaPreviousNextPage } from './kta-previous-next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousNextPageRoutingModule
  ],
  declarations: [KtaPreviousNextPage]
})
export class KtaPreviousNextPageModule {}
