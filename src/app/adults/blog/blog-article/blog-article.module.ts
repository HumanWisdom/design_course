import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogArticlePageRoutingModule } from './blog-article-routing.module';

import { BlogArticlePage } from './blog-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogArticlePageRoutingModule
  ],
  declarations: [BlogArticlePage]
})
export class BlogArticlePageModule {}
