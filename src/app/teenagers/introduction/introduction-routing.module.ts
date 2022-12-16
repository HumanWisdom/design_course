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
    path: 'carousel',
    loadChildren: () => import('./carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'personalised-for-you',
    loadChildren: () => import('./personalised-for-you/personalised-for-you.module').then( m => m.PersonalisedForYouPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
