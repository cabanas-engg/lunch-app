import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { OptionCardsComponent } from '../data/option-cards/option-cards.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WinnersWidgetComponent } from '../winners-widget/winners-widget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivePollComponent } from '../active-poll/active-poll.component';
import { PollHistoryComponent } from '../poll-history/poll-history.component';
import { CreatePollComponent } from '../create-poll/create-poll.component';
import { AllOptionsComponent } from '../all-options/all-options.component';



@NgModule({
  declarations: [
    OptionCardsComponent,
    WinnersWidgetComponent,
    ActivePollComponent,
    PollHistoryComponent,
    ActivePollComponent,
    CreatePollComponent,
    AllOptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatSliderModule,
    MatSnackBarModule,
    MatPaginatorModule,
    NgApexchartsModule,
    MatTableModule

  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatSliderModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    OptionCardsComponent,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    NgApexchartsModule,
    WinnersWidgetComponent,
    PollHistoryComponent,
    ActivePollComponent,
    CreatePollComponent,
    AllOptionsComponent
  ]
})
export class SharedModule { }
