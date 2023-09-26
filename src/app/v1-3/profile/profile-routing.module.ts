import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "index",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "edit-profile",
    loadChildren: () => import("./edit-profile/edit-profile.module").then(m => m.EditProfilePageModule)
  },
  {
    path: "change-password",
    loadChildren: () => import("./change-password/change-password.module").then(m => m.ChangePasswordPageModule)
  },
  {
    path: "update-payment-details",
    loadChildren: () => import("./update-payment-details/update-payment-details.module").then(m => m.UpdatePaymentDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
