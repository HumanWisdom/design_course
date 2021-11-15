import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalLandingV02PageRoutingModule } from './journal-landing-v02-routing.module';

import { JournalLandingV02Page } from './journal-landing-v02.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalLandingV02PageRoutingModule,
    SharedModule
  ],
  declarations: [JournalLandingV02Page]
})
export class JournalLandingV02PageModule {}
