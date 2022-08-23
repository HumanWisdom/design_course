import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextListItemsPageRoutingModule } from './kta-previous-next-list-items-routing.module';

import { KtaPreviousNextListItemsPage } from './kta-previous-next-list-items.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousNextListItemsPageRoutingModule,
    SharedModule
  ],
  declarations: [KtaPreviousNextListItemsPage]
})
export class KtaPreviousNextListItemsPageModule {}
