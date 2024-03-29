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
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'adverts',
    loadChildren: () => import('./adverts/adverts.module').then( m => m.AdvertsPageModule)
  },
  {
    path: 'adverts-hwp',
    loadChildren: () => import('./adverts-hwp/adverts-hwp.module').then( m => m.AdvertsHwpPageModule)
  },
  {
    path: 'adverts-hwp-app',
    loadChildren: () => import('./adverts-hwp-app/adverts-hwp-app.module').then( m => m.AdvertsHwpAppPageModule)
  },
  {
    path: 'adverts-about',
    loadChildren: () => import('./adverts-about/adverts-about.module').then( m => m.AdvertsAboutPageModule)
  },
  {
    path: 'adverts-hwp-work',
    loadChildren: () => import('./adverts-hwp-work/adverts-hwp-work.module').then( m => m.AdvertsHwpWorkPageModule)
  },
  {
    path: 'adverts-hwp-student',
    loadChildren: () => import('./adverts-hwp-student/adverts-hwp-student.module').then( m => m.AdvertsHwpStudentPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
