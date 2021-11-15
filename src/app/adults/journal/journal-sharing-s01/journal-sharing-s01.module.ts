import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalSharingS01PageRoutingModule } from './journal-sharing-s01-routing.module';

import { JournalSharingS01Page } from './journal-sharing-s01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalSharingS01PageRoutingModule
  ],
  declarations: [JournalSharingS01Page]
})
export class JournalSharingS01PageModule {}
