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
  {
    path: 'index-wisdom-stories',
    loadChildren: () => import('./index-wisdom-stories/index-wisdom-stories.module').then( m => m.IndexWisdomStoriesPageModule)
  },
  {
    path: 'index-wisdom-stories-tiles',
    loadChildren: () => import('./index-wisdom-stories-tiles/index-wisdom-stories-tiles.module').then( m => m.IndexWisdomStoriesTilesPageModule)
  },
  {
    path: 'module-end-related-modules',
    loadChildren: () => import('./module-end-related-modules/module-end-related-modules.module').then( m => m.ModuleEndRelatedModulesPageModule)
  },
  {
    path: 'module-end-videos',
    loadChildren: () => import('./module-end-videos/module-end-videos.module').then( m => m.ModuleEndVideosPageModule)
  },
  {
    path: 'add-to-homescreen-ios',
    loadChildren: () => import('./add-to-homescreen-ios/add-to-homescreen-ios.module').then( m => m.AddToHomescreenIosPageModule)
  },
  {
    path: 'nature-of-i-s01',
    loadChildren: () => import('./nature-of-i-s01/nature-of-i-s01.module').then( m => m.NatureOfIS01PageModule)
  },
  {
    path: 'nature-of-i-s02',
    loadChildren: () => import('./nature-of-i-s02/nature-of-i-s02.module').then( m => m.NatureOfIS02PageModule)
  },
  {
    path: 'toc-audio-title',
    loadChildren: () => import('./toc-audio-title/toc-audio-title.module').then( m => m.TocAudioTitlePageModule)
  },
  {
    path: 'screen-progress-bar',
    loadChildren: () => import('./screen-progress-bar/screen-progress-bar.module').then( m => m.ScreenProgressBarPageModule)
  },
  {
    path: 'toc-resume',
    loadChildren: () => import('./toc-resume/toc-resume.module').then( m => m.TocResumePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'feedback-survey-index',
    loadChildren: () => import('./feedback-survey-index/feedback-survey-index.module').then( m => m.FeedbackSurveyIndexPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
