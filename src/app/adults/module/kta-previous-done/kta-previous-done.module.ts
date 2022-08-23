import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousDonePageRoutingModule } from './kta-previous-done-routing.module';

import { KtaPreviousDonePage } from './kta-previous-done.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousDonePageRoutingModule,
    SharedModule
  ],
  declarations: [KtaPreviousDonePage]
})
export class KtaPreviousDonePageModule {}
