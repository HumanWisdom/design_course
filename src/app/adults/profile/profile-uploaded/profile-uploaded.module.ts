import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUploadedPageRoutingModule } from './profile-uploaded-routing.module';

import { ProfileUploadedPage } from './profile-uploaded.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUploadedPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileUploadedPage]
})
export class ProfileUploadedPageModule {}
