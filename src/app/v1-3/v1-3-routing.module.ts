import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./splash/splash.module").then(m => m.SplashPageModule)
  },
  {
    path: "splash",
    loadChildren: () => import("./splash/splash.module").then(m => m.SplashPageModule)
  },
  {
    path: 'repeat-user',
    loadChildren: () => import('./repeat-user/repeat-user.module').then( m => m.RepeatUserPageModule)
  },
  {
    path: 'feel-better-now',
    loadChildren: () => import('./feel-better-now/feel-better-now.module').then( m => m.FeelBetterNowModule)
  },
  {
    path: 'select-a-topic-to-explore',
    loadChildren: () => import('./select-a-topic-to-explore/select-a-topic-to-explore.module').then( m => m.SelectATopicToExplorePageModule)
  },
  {
    path: 'find-inspiration',
    loadChildren: () => import('./find-inspiration/find-inspiration.module').then( m => m.FindInspirationPageModule)
  },
  {
    path: 'pathway',
    loadChildren: () => import('./pathway/pathway.module').then( m => m.PathwayModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'curated',
    loadChildren: () => import('./curated/curated.module').then( m => m.CuratedModule)
  },
  {
    path: 'find-answers-questions',
    loadChildren: () => import('./find-answers-questions/find-answers-questions.module').then( m => m.FindAnswersQuestionsPageModule)
  },
  {
    path: 'find-answers-answers',
    loadChildren: () => import('./find-answers-answers/find-answers-answers.module').then( m => m.FindAnswersAnswersPageModule)
  },
  {
    path: 'change-topic',
    loadChildren: () => import('./change-topic/change-topic.module').then( m => m.ChangeTopicPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V13RoutingModule { }
