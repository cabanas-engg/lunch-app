import { Component, OnInit, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Poll, TextPollOption } from 'src/app/classes/create-poll';
import { option } from 'src/app/data/lunch-options-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newPoll: Poll = new Poll();
  newOption: TextPollOption = new TextPollOption();

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router) {}

  createPoll(): void {
    this.apiService.createPoll(this.newPoll).subscribe(resp => {
      this.newPoll = new Poll();
      this.router.navigate(['/active-poll'])
    })
  }

  addPollOptions(options: option[]): void {
    this.newPoll.poll_options = [];
    options.forEach((option: option) => {
      let newOption = new TextPollOption()
      newOption.value = option.title;
      this.newPoll.addOption(newOption);
    });
  }

}
