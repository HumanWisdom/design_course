import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalSharingS03PageRoutingModule } from './journal-sharing-s03-routing.module';

import { JournalSharingS03Page } from './journal-sharing-s03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalSharingS03PageRoutingModule
  ],
  declarations: [JournalSharingS03Page]
})
export class JournalSharingS03PageModule {}
