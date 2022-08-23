import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextPageRoutingModule } from './kta-previous-next-routing.module';

import { KtaPreviousNextPage } from './kta-previous-next.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousNextPageRoutingModule,
    SharedModule
  ],
  declarations: [KtaPreviousNextPage]
})
export class KtaPreviousNextPageModule {}
