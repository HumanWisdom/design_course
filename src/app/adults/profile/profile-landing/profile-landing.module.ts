import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileLandingPageRoutingModule } from './profile-landing-routing.module';

import { ProfileLandingPage } from './profile-landing.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileLandingPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileLandingPage]
})
export class ProfileLandingPageModule {}
