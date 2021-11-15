import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalLandingV01PageRoutingModule } from './journal-landing-v01-routing.module';

import { JournalLandingV01Page } from './journal-landing-v01.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalLandingV01PageRoutingModule,
    SharedModule
  ],
  declarations: [JournalLandingV01Page]
})
export class JournalLandingV01PageModule {}
