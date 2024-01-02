import { Component, OnInit, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Poll, TextPollOption } from 'src/app/classes/create-poll';
import { option } from 'src/app/data/lunch-options-data';
import { ApiService } from 'src/app/services/api.service';


interface generated_poll {
  id: string,
  src: string,
  iframe_id: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newPoll: Poll = new Poll();
  newOption: TextPollOption = new TextPollOption();
  generatedPoll: generated_poll = {id: "", src: "", iframe_id: ""};

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer) {}

  createPoll(): void {
    this.apiService.createPoll(this.newPoll).subscribe(resp => {
      this.generatedPoll = {id: `strawpoll_${resp.id}`, src: resp.embed_url, iframe_id: `strawpoll_iframe_${resp.id}`}
      this.newPoll = new Poll();
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

  allowGeneratedPoll() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.generatedPoll.src);
  }

}
