import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextListItemsPageRoutingModule } from './kta-previous-next-list-items-routing.module';

import { KtaPreviousNextListItemsPage } from './kta-previous-next-list-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KtaPreviousNextListItemsPageRoutingModule
  ],
  declarations: [KtaPreviousNextListItemsPage]
})
export class KtaPreviousNextListItemsPageModule {}
