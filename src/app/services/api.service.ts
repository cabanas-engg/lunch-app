import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Poll } from '../classes/create-poll';

const apiKey = environment.apiKey;
const createPollURL = 'https://api.strawpoll.com/v3/polls';
const pollHistoryURL = 'https://api.strawpoll.com/v3/users/@me/polls';
const getPollURL = 'https://api.strawpoll.com/v3/polls/';


const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'X-API-Key': apiKey
  }),
};

const exampleCall = `{
  "title":"What type of content do you want to see more of in the future?",
  "media":{"id":"poy9NPNwnJr","type":"image","source":"https://www.example.com/source.html","url":"https://cdn.strawpoll.com/media/poll-images/poy9NPNwnJr-c.png","width":640,"height":480},
  "workspace":{"id":"poy9NPNwnJr","name":"My workspace","member_count":2,"poll_count":10},
  "poll_options":[{"id":"B2ZBXVaAEnJ","type":"text","position":0,"vote_count":0,"max_votes":0,"description":"This is a description text","is_write_in":false,"value":"Reactions"}],
  "poll_config":{"is_private":true,"vote_type":"default","allow_comments":true,"allow_indeterminate":false,"allow_other_option":false,"custom_design_colors":"{}","deadline_at":1649671274,"duplication_checking":"ip","allow_vpn_users":false,"edit_vote_permissions":"admin","force_appearance":"auto","hide_participants":false,"is_multiple_choice":true,"multiple_choice_min":1,"multiple_choice_max":2,"number_of_winners":1,"randomize_options":false,"require_voter_names":false,"results_visibility":"always","use_custom_design":false},
  "poll_meta":{"description":"This is a description text.","location":"This is a location text.","timezone":"Europe/Berlin"},
  "type":"multiple_choice"
}`


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  createPoll(poll: Poll):Observable<any> {
    return this.http.post<Poll>(
      createPollURL, JSON.stringify(poll),httpOptions
    ).pipe(map(resp => resp));
  }

  getPollData(poll_id: string):Observable<any> {
    return this.http.get<any>(getPollURL + poll_id,httpOptions)}

  getHistory():Observable<any> {
    return this.http.get<any>(pollHistoryURL,httpOptions
    ).pipe(map(resp => {
      resp.data.forEach((opt: any) => {
        opt.winner = this.getWinnerOption(opt.poll_options)
      })
      return resp
    }));
  }
  
  getWinnerOption(poll_options: any[]): string {
    let winner = "None";
    let max_votes = 0;

    poll_options.forEach((option: any) => {
      if(option.has_votes && option.vote_count > max_votes) {
        max_votes = option.vote_count;
        winner = option.value;
      }
    });

    return winner;
  }
  

}
