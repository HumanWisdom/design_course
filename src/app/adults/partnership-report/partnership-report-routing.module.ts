import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./income-report/income-report.module').then( m => m.IncomeReportPageModule)
  },
  {
    path: 'income-report',
    loadChildren: () => import('./income-report/income-report.module').then( m => m.IncomeReportPageModule)
  },
  {
    path: 'income-activity',
    loadChildren: () => import('./income-activity/income-activity.module').then( m => m.IncomeActivityPageModule)
  },
  {
    path: 'tree-plantation-report',
    loadChildren: () => import('./tree-plantation-report/tree-plantation-report.module').then( m => m.TreePlantationReportPageModule)
  },
  {
    path: 'no-partner',
    loadChildren: () => import('./no-partner/no-partner.module').then( m => m.NoPartnerPageModule)
  },
  {
    path: 'tree-partner',
    loadChildren: () => import('./tree-partner/tree-partner.module').then( m => m.TreePartnerPageModule)
  },
  {
    path: 'income-partner',
    loadChildren: () => import('./income-partner/income-partner.module').then( m => m.IncomePartnerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipReportRoutingModule { }
