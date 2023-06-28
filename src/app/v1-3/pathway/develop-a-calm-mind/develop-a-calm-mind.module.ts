import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopACalmMindPageRoutingModule } from './develop-a-calm-mind-routing.module';

import { DevelopACalmMindPage } from './develop-a-calm-mind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopACalmMindPageRoutingModule
  ],
  declarations: [DevelopACalmMindPage]
})
export class DevelopACalmMindPageModule {}
