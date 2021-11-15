import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageOpsParentsPageRoutingModule } from './webpage-ops-parents-routing.module';

import { WebpageOpsParentsPage } from './webpage-ops-parents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageOpsParentsPageRoutingModule
  ],
  declarations: [WebpageOpsParentsPage]
})
export class WebpageOpsParentsPageModule {}
