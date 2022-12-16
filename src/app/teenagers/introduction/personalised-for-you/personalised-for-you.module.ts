import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalisedForYouPageRoutingModule } from './personalised-for-you-routing.module';

import { PersonalisedForYouPage } from './personalised-for-you.page';

import { SharedModule } from 'src/app/adults/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalisedForYouPageRoutingModule,
    SharedModule
  ],
  declarations: [PersonalisedForYouPage]
})
export class PersonalisedForYouPageModule {}
