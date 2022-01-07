import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToHomescreenIosPageRoutingModule } from './add-to-homescreen-ios-routing.module';

import { AddToHomescreenIosPage } from './add-to-homescreen-ios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToHomescreenIosPageRoutingModule
  ],
  declarations: [AddToHomescreenIosPage]
})
export class AddToHomescreenIosPageModule {}
