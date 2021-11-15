import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./webpage-about-mk/webpage-about-mk.module").then( m => m.WebpageAboutMkPageModule)
  },
  {
    path: "webpage-about-mk",
    loadChildren: () => import("./webpage-about-mk/webpage-about-mk.module").then( m => m.WebpageAboutMkPageModule)
  },
  {
    path: "webpage-activation",
    loadChildren: () => import("./webpage-activation/webpage-activation.module").then( m => m.WebpageActivationPageModule)
  },
  {
    path: "webpage-cookie-policy",
    loadChildren: () => import("./webpage-cookie-policy/webpage-cookie-policy.module").then( m => m.WebpageCookiePolicyPageModule)
  },
  {
    path: "webpage-discount",
    loadChildren: () => import("./webpage-discount/webpage-discount.module").then( m => m.WebpageDiscountPageModule)
  },
  {
    path: "webpage-faq",
    loadChildren: () => import("./webpage-faq/webpage-faq.module").then( m => m.WebpageFaqPageModule)
  },     
  {
    path: "webpage-forgot-password",
    loadChildren: () => import("./webpage-forgot-password/webpage-forgot-password.module").then( m => m.WebpageForgotPasswordPageModule)
  },
  {
    path: "webpage-help",
    loadChildren: () => import("./webpage-help/webpage-help.module").then( m => m.WebpageHelpPageModule)
  },
  {
    path: "webpage-landing",
    loadChildren: () => import("./webpage-landing/webpage-landing.module").then( m => m.WebpageLandingPageModule)
  },  
  {
    path: "webpage-login",
    loadChildren: () => import("./webpage-login/webpage-login.module").then( m => m.WebpageLoginPageModule)
  },
  {
    path: "webpage-mk-book",
    loadChildren: () => import("./webpage-mk-book/webpage-mk-book.module").then( m => m.WebpageMkBookPageModule)
  },
  {
    path: "webpage-ops-adults",
    loadChildren: () => import("./webpage-ops-adults/webpage-ops-adults.module").then( m => m.WebpageOpsAdultsPageModule)
  },
  {
    path: "webpage-ops-childrens",
    loadChildren: () => import("./webpage-ops-childrens/webpage-ops-childrens.module").then( m => m.WebpageOpsChildrensPageModule)
  },
  {
    path: "webpage-ops-parents",
    loadChildren: () => import("./webpage-ops-parents/webpage-ops-parents.module").then( m => m.WebpageOpsParentsPageModule)
  },
  {
    path: "webpage-ops-teenagers",
    loadChildren: () => import("./webpage-ops-teenagers/webpage-ops-teenagers.module").then( m => m.WebpageOpsTeenagersPageModule)
  },
  {
    path: "webpage-our-programs",
    loadChildren: () => import("./webpage-our-programs/webpage-our-programs.module").then( m => m.WebpageOurProgramsPageModule)
  },
  {
    path: "webpage-privacy-policy",
    loadChildren: () => import("./webpage-privacy-policy/webpage-privacy-policy.module").then( m => m.WebpagePrivacyPolicyPageModule)
  },
  {
    path: "webpage-profile",
    loadChildren: () => import("./webpage-profile/webpage-profile.module").then( m => m.WebpageProfilePageModule)
  },
  {
    path: "webpage-refer-friend",
    loadChildren: () => import("./webpage-refer-friend/webpage-refer-friend.module").then( m => m.WebpageReferFriendPageModule)
  },
  {
    path: "webpage-share-gift-of-wisdom",
    loadChildren: () => import("./webpage-share-gift-of-wisdom/webpage-share-gift-of-wisdom.module").then( m => m.WebpageShareGiftOfWisdomPageModule)
  },
  {
    path: "webpage-signup",
    loadChildren: () => import("./webpage-signup/webpage-signup.module").then( m => m.WebpageSignupPageModule)
  },
  {
    path: "webpage-terms-conditions",
    loadChildren: () => import("./webpage-terms-conditions/webpage-terms-conditions.module").then( m => m.WebpageTermsConditionsPageModule)
  },
  {
    path: "webpage-testimonials",
    loadChildren: () => import("./webpage-testimonials/webpage-testimonials.module").then( m => m.WebpageTestimonialsPageModule)
  },
  {
    path: "webpage-wisdom-community",
    loadChildren: () => import("./webpage-wisdom-community/webpage-wisdom-community.module").then( m => m.WebpageWisdomCommunityPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpageRoutingModule { }
