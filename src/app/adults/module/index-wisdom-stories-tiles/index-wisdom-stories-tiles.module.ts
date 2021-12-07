import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexWisdomStoriesTilesPageRoutingModule } from './index-wisdom-stories-tiles-routing.module';

import { IndexWisdomStoriesTilesPage } from './index-wisdom-stories-tiles.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexWisdomStoriesTilesPageRoutingModule,
    SharedModule
  ],
  declarations: [IndexWisdomStoriesTilesPage]
})
export class IndexWisdomStoriesTilesPageModule {}
