import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousDonePageRoutingModule } from './kta-previous-done-routing.module';

import { KtaPreviousDonePage } from './kta-previous-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousDonePageRoutingModule
  ],
  declarations: [KtaPreviousDonePage]
})
export class KtaPreviousDonePageModule {}
