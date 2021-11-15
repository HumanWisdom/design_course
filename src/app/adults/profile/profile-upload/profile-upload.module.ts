import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUploadPageRoutingModule } from './profile-upload-routing.module';

import { ProfileUploadPage } from './profile-upload.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUploadPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileUploadPage]
})
export class ProfileUploadPageModule {}
