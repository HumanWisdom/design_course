import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./introduction-s5circles/introduction-s5circles.module').then( m => m.IntroductionS5circlesPageModule)
  },
  {
    path: "introduction-s5circles",
    loadChildren: () => import('./introduction-s5circles/introduction-s5circles.module').then( m => m.IntroductionS5circlesPageModule)
  },
  {
    path: "introduction-s5circles-rc",
    loadChildren: () => import('./introduction-s5circles-rc/introduction-s5circles-rc.module').then( m => m.IntroductionS5circlesRcPageModule)
  },
  {
    path: "introduction-s5circles-program-content",
    loadChildren: () => import('./introduction-s5circles-program-content/introduction-s5circles-program-content.module').then( m => m.IntroductionS5circlesProgramContentPageModule)
  },
  {
    path: 'kta-previous-done',
    loadChildren: () => import('./kta-previous-done/kta-previous-done.module').then( m => m.KtaPreviousDonePageModule)
  },
  {
    path: 'kta-previous-next',
    loadChildren: () => import('./kta-previous-next/kta-previous-next.module').then( m => m.KtaPreviousNextPageModule)
  },
  {
    path: 'kta-previous-next-list-items',
    loadChildren: () => import('./kta-previous-next-list-items/kta-previous-next-list-items.module').then( m => m.KtaPreviousNextListItemsPageModule)
  },
  {
    path: 'module-end-v01',
    loadChildren: () => import('./module-end-v01/module-end-v01.module').then( m => m.ModuleEndV01PageModule)
  },
  {
    path: 'session-end-s02-v01',
    loadChildren: () => import('./session-end-s02-v01/session-end-s02-v01.module').then( m => m.SessionEndS02V01PageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'stress-img-audio',
    loadChildren: () => import('./stress-img-audio/stress-img-audio.module').then( m => m.StressImgAudioPageModule)
  },
  {
    path: 'stress-img-audio-rc',
    loadChildren: () => import('./stress-img-audio-rc/stress-img-audio-rc.module').then( m => m.StressImgAudioRcPageModule)
  },
  {
    path: 'stress-img-txt-long',
    loadChildren: () => import('./stress-img-txt-long/stress-img-txt-long.module').then( m => m.StressImgTxtLongPageModule)
  },
  {
    path: 'stress-img-txt-short',
    loadChildren: () => import('./stress-img-txt-short/stress-img-txt-short.module').then( m => m.StressImgTxtShortPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
