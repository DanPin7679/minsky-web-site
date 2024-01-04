import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { TutosComponent } from './tutos/tutos.component';

export const routes: Routes = [
  {
    path: 'home-route',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'docs-route',
    component: DocsComponent,
    title: 'Docs page',
  },
  {
    path: 'tutorials-route',
    component: TutosComponent,
    title: 'Tutos page',
  },
];
