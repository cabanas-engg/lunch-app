import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';

export const routes: Routes = [
    {
      path: '',
      component: FullComponent,
      children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
        },
        {
          path: 'poll-history',
          component: PollHistoryComponent,
          data: {
            title: "Poll History",
            urls: [{ title: "Poll History"}],
          },
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
