import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalAddNotePageRoutingModule } from './journal-add-note-routing.module';

import { JournalAddNotePage } from './journal-add-note.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalAddNotePageRoutingModule,
    SharedModule
  ],
  declarations: [JournalAddNotePage]
})
export class JournalAddNotePageModule {}
