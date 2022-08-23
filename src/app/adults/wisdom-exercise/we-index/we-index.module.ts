import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeIndexPageRoutingModule } from './we-index-routing.module';

import { WeIndexPage } from './we-index.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [WeIndexPage]
})
export class WeIndexPageModule {}
