import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./personalised-for-you/personalised-for-you.module").then(m => m.PersonalisedForYouPageModule)  
  },
  {
    path: "personalised-for-you",
    loadChildren: () => import("./personalised-for-you/personalised-for-you.module").then(m => m.PersonalisedForYouPageModule)  
  },
  {
    path: "subscription-options",
    loadChildren: () => import("./subscription-options/subscription-options.module").then(m => m.SubscriptionOptionsPageModule)  
  },
  {
    path: 'personalised-for-you-search',
    loadChildren: () => import('./personalised-for-you-search/personalised-for-you-search.module').then( m => m.PersonalisedForYouSearchPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductoryRoutingModule { }
