import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageOpsChildrensPageRoutingModule } from './webpage-ops-childrens-routing.module';

import { WebpageOpsChildrensPage } from './webpage-ops-childrens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageOpsChildrensPageRoutingModule
  ],
  declarations: [WebpageOpsChildrensPage]
})
export class WebpageOpsChildrensPageModule {}
