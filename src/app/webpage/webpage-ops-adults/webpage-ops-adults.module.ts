import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageOpsAdultsPageRoutingModule } from './webpage-ops-adults-routing.module';

import { WebpageOpsAdultsPage } from './webpage-ops-adults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageOpsAdultsPageRoutingModule
  ],
  declarations: [WebpageOpsAdultsPage]
})
export class WebpageOpsAdultsPageModule {}
