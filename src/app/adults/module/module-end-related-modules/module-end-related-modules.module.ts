import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleEndRelatedModulesPageRoutingModule } from './module-end-related-modules-routing.module';

import { ModuleEndRelatedModulesPage } from './module-end-related-modules.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleEndRelatedModulesPageRoutingModule,
    SharedModule
  ],
  declarations: [ModuleEndRelatedModulesPage]
})
export class ModuleEndRelatedModulesPageModule {}
