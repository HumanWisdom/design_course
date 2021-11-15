import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageOurProgramsPageRoutingModule } from './webpage-our-programs-routing.module';

import { WebpageOurProgramsPage } from './webpage-our-programs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageOurProgramsPageRoutingModule
  ],
  declarations: [WebpageOurProgramsPage]
})
export class WebpageOurProgramsPageModule {}
