import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalSharingS02PageRoutingModule } from './journal-sharing-s02-routing.module';

import { JournalSharingS02Page } from './journal-sharing-s02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalSharingS02PageRoutingModule
  ],
  declarations: [JournalSharingS02Page]
})
export class JournalSharingS02PageModule {}
