import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageLoginPageRoutingModule } from './webpage-login-routing.module';

import { WebpageLoginPage } from './webpage-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageLoginPageRoutingModule
  ],
  declarations: [WebpageLoginPage]
})
export class WebpageLoginPageModule {}
