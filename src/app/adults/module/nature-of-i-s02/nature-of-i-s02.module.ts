import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NatureOfIS02PageRoutingModule } from './nature-of-i-s02-routing.module';

import { NatureOfIS02Page } from './nature-of-i-s02.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NatureOfIS02PageRoutingModule,
    SharedModule
  ],
  declarations: [NatureOfIS02Page]
})
export class NatureOfIS02PageModule {}
