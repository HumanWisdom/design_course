import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageForgotPasswordPageRoutingModule } from './webpage-forgot-password-routing.module';

import { WebpageForgotPasswordPage } from './webpage-forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageForgotPasswordPageRoutingModule
  ],
  declarations: [WebpageForgotPasswordPage]
})
export class WebpageForgotPasswordPageModule {}
