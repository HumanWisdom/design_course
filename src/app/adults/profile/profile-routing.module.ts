import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./profile-landing/profile-landing.module').then( m => m.ProfileLandingPageModule)
  },
  {
    path: "profile-edit",
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: "profile-landing",
    loadChildren: () => import('./profile-landing/profile-landing.module').then( m => m.ProfileLandingPageModule)
  },
  {
    path: "profile-upload",
    loadChildren: () => import('./profile-upload/profile-upload.module').then( m => m.ProfileUploadPageModule)
  },
  {
    path: "profile-uploaded",
    loadChildren: () => import('./profile-uploaded/profile-uploaded.module').then( m => m.ProfileUploadedPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
