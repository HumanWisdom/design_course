import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./podcast-resume/podcast-resume.module').then( m => m.PodcastResumePageModule)
  },
  {
    path: "podcast-resume",
    loadChildren: () => import('./podcast-resume/podcast-resume.module').then( m => m.PodcastResumePageModule)
  },
  {
    path: "podcast-start",
    loadChildren: () => import('./podcast-start/podcast-start.module').then( m => m.PodcastStartPageModule)
  },
  {
    path: "podcast-toc",
    loadChildren: () => import('./podcast-toc/podcast-toc.module').then( m => m.PodcastTocPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
