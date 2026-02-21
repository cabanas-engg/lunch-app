import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';
import { ActivePollComponent } from './active-poll/active-poll.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { WinnersWidgetComponent } from './winners-widget/winners-widget.component';

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
        {
          path: 'active-poll',
          component: ActivePollComponent,
          data: {
            title: "Active Poll",
            urls: [{ title: "Active Poll"}],
          },
        },
        {
          path: 'new-poll',
          component: CreatePollComponent,
          data: {
            title: "New Poll",
            urls: [{ title: "New Poll"}],
          },
        },
        {
          path: 'winner',
          component: WinnersWidgetComponent,
          data: {
            title: "Winner",
            urls: [{ title: "Winner"}],
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
