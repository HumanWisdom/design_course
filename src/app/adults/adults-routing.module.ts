import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./onboarding/onboarding.module").then(m => m.OnboardingModule)  
  },
  {
    path: "bookmarks",
    loadChildren: () => import("./bookmarks/bookmarks.module").then( m => m.BookmarksPageModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then( m => m.DashboardModule)
  },
  {
    path: "forum",
    loadChildren: () => import("./forum/forum.module").then( m => m.ForumModule)
  },
  {
    path: "journal",
    loadChildren: () => import("./journal/journal.module").then( m => m.JournalModule)
  },
  {
    path: "modals",
    loadChildren: () => import("./modals/modals.module").then( m => m.ModalsModule)
  },
  {
    path: "module",
    loadChildren: () => import("./module/module.module").then( m => m.ModuleModule)
  },
  {
    path: "onboarding",
    loadChildren: () => import("./onboarding/onboarding.module").then(m => m.OnboardingModule)  
  },
  {
    path: "podcast",
    loadChildren: () => import("./podcast/podcast.module").then(m => m.PodcastModule)  
  },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)  
  },
  {
    path: "static",
    loadChildren: () => import("./static/static.module").then(m => m.StaticModule)  
  },
  {
    path: "subscription",
    loadChildren: () => import("./subscription/subscription.module").then( m => m.SubscriptionModule)
  },
  {
    path: "tree-planting-program",
    loadChildren: () => import("./tree-planting-program/tree-planting-program.module").then( m => m.TreePlantingProgramPageModule)
  },
  {
    path: "wisdom-stories",
    loadChildren: () => import("./wisdom-stories/wisdom-stories.module").then( m => m.WisdomStoriesModule)
  },
  {
    path: "search",
    loadChildren: () => import("./search/search.module").then( m => m.SearchModule)
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then( m => m.BlogModule)
  },
  {
    path: "wisdom-shorts",
    loadChildren: () => import("./wisdom-shorts/wisdom-shorts.module").then( m => m.WisdomShortsModule)
  },
  {
    path: 'treesisters',
    loadChildren: () => import('./treesisters/treesisters.module').then( m => m.TreesistersPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqModule)
  },
  {
    path: 'wisdom-points',
    loadChildren: () => import('./wisdom-points/wisdom-points.module').then( m => m.WisdomPointsModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountModule)
  },
  {
    path: 'introductory',
    loadChildren: () => import('./introductory/introductory.module').then( m => m.IntroductoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultsRoutingModule { }
