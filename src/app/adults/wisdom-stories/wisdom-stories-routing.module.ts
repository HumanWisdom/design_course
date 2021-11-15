import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./wisdom-stories-landing/wisdom-stories-landing.module").then( m => m.WisdomStoriesLandingPageModule)
  },
  {
    path: "wisdom-stories-landing",
    loadChildren: () => import("./wisdom-stories-landing/wisdom-stories-landing.module").then( m => m.WisdomStoriesLandingPageModule)
  },
  {
    path: "wisdom-stories-search",
    loadChildren: () => import("./wisdom-stories-search/wisdom-stories-search.module").then( m => m.WisdomStoriesSearchPageModule)
  },
  {
    path: "wisdom-stories-story",
    loadChildren: () => import("./wisdom-stories-story/wisdom-stories-story.module").then( m => m.WisdomStoriesStoryPageModule)
  },
  {
    path: "wisdom-stories-story-submit",
    loadChildren: () => import("./wisdom-stories-story-submit/wisdom-stories-story-submit.module").then( m => m.WisdomStoriesStorySubmitPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomStoriesRoutingModule { }
