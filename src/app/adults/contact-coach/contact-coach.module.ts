import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactCoachPageRoutingModule } from './contact-coach-routing.module';

import { ContactCoachPage } from './contact-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactCoachPageRoutingModule
  ],
  declarations: [ContactCoachPage]
})
export class ContactCoachPageModule {}
