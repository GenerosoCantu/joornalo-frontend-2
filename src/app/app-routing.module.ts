import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionComponent } from './features/section/section.component';
import { NewsComponent } from './features/news/news.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/section/home',
    // component: SectionComponent
  },
  {
    path: 'section/:section',
    pathMatch: 'full',
    component: SectionComponent
  },
  {
    path: 'section/:section/:date',
    pathMatch: 'full',
    component: SectionComponent
  },
  {
    path: 'section/:section/:date/:id',
    pathMatch: 'full',
    component: NewsComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
