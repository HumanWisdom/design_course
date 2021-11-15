import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: "cookie-policy",
    loadChildren: () => import('./cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: "faq",
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: "hwp-projects",
    loadChildren: () => import('./hwp-projects/hwp-projects.module').then( m => m.HwpProjectsPageModule)
  },
  {
    path: "privacy-policy",
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: "terms-conditions",
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: "testimonials",
    loadChildren: () => import('./testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
  },
  {
    path: "webpage-landing-v01",
    loadChildren: () => import('./webpage-landing-v01/webpage-landing-v01.module').then( m => m.WebpageLandingV01PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
