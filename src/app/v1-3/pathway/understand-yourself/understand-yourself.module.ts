import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderstandYourselfPageRoutingModule } from './understand-yourself-routing.module';

import { UnderstandYourselfPage } from './understand-yourself.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderstandYourselfPageRoutingModule
  ],
  declarations: [UnderstandYourselfPage]
})
export class UnderstandYourselfPageModule {}
