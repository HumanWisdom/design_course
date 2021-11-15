import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleEndV01PageRoutingModule } from './module-end-v01-routing.module';

import { ModuleEndV01Page } from './module-end-v01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleEndV01PageRoutingModule
  ],
  declarations: [ModuleEndV01Page]
})
export class ModuleEndV01PageModule {}
