import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';

interface generated_poll {
  id: string,
  src: string,
  iframe_id: string
}

@Component({
  selector: 'app-active-poll',
  templateUrl: './active-poll.component.html',
  styleUrls: ['./active-poll.component.scss']
})
export class ActivePollComponent implements OnInit {
  loading: boolean = false;
  generatedPoll: generated_poll = {id: "", src: "", iframe_id: ""};
  currentDate: number = Math.floor(Date.now() / 1000);

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getActivePoll();
  }

  getActivePoll(): void {
    this.loading = true;
    this.apiService.getActivePoll().subscribe(resp => {
      if(resp.poll_config.deadline_at > this.currentDate) {
        this.generatedPoll = {id: `strawpoll_${resp.id}`, src: resp.embed_url, iframe_id: `strawpoll_iframe_${resp.id}`}
      }
      this.loading = false;
    })
  }

  allowGeneratedPoll() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.generatedPoll.src);
  }
}
