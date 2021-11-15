import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageHelpPageRoutingModule } from './webpage-help-routing.module';

import { WebpageHelpPage } from './webpage-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageHelpPageRoutingModule
  ],
  declarations: [WebpageHelpPage]
})
export class WebpageHelpPageModule {}
