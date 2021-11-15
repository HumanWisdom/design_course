import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageOpsTeenagersPageRoutingModule } from './webpage-ops-teenagers-routing.module';

import { WebpageOpsTeenagersPage } from './webpage-ops-teenagers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageOpsTeenagersPageRoutingModule
  ],
  declarations: [WebpageOpsTeenagersPage]
})
export class WebpageOpsTeenagersPageModule {}
