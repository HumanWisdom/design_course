import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsHwpStudentPageRoutingModule } from './adverts-hwp-student-routing.module';

import { AdvertsHwpStudentPage } from './adverts-hwp-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsHwpStudentPageRoutingModule
  ],
  declarations: [AdvertsHwpStudentPage]
})
export class AdvertsHwpStudentPageModule {}
