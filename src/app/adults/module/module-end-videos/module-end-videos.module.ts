import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleEndVideosPageRoutingModule } from './module-end-videos-routing.module';

import { ModuleEndVideosPage } from './module-end-videos.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleEndVideosPageRoutingModule,
    SharedModule
  ],
  declarations: [ModuleEndVideosPage]
})
export class ModuleEndVideosPageModule {}
