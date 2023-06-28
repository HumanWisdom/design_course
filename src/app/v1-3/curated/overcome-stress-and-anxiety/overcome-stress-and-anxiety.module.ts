import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvercomeStressAndAnxietyPageRoutingModule } from './overcome-stress-and-anxiety-routing.module';

import { OvercomeStressAndAnxietyPage } from './overcome-stress-and-anxiety.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvercomeStressAndAnxietyPageRoutingModule
  ],
  declarations: [OvercomeStressAndAnxietyPage]
})
export class OvercomeStressAndAnxietyPageModule {}
