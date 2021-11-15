import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./forum-landing/forum-landing.module").then( m => m.ForumLandingPageModule)
  },
  {
    path: "forum-landing",
    loadChildren: () => import("./forum-landing/forum-landing.module").then( m => m.ForumLandingPageModule)
  },
  {
    path: "forum-thread",
    loadChildren: () => import("./forum-thread/forum-thread.module").then( m => m.ForumThreadPageModule)
  },
  {
    path: "forum-thread-reply",
    loadChildren: () => import("./forum-thread-reply/forum-thread-reply.module").then( m => m.ForumThreadReplyPageModule)
  },
  {
    path: "forum-thread-start-new",
    loadChildren: () => import("./forum-thread-start-new/forum-thread-start-new.module").then( m => m.ForumThreadStartNewPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
