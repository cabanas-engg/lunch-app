import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Poll } from '../classes/create-poll';
import { chart_data, winner_option } from '../winners-widget/winners-data';

const apiKey = environment.apiKey;
const createPollURL = 'https://api.strawpoll.com/v3/polls';
const pollHistoryURL = 'https://api.strawpoll.com/v3/users/@me/polls?';
const getPollURL = 'https://api.strawpoll.com/v3/polls/';


const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'X-API-Key': apiKey
  }),
};


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

  getHistory(pageNumber: number, pageSize: number):Observable<any> {
    return this.http.get<any>(pollHistoryURL + `limit=${pageSize.toString()}&page=${pageNumber.toString()}`,
    httpOptions).pipe(map(resp => {
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

  getActivePoll():Observable<any> {
    return this.http.get<any>(pollHistoryURL + 'limit=1&page=1',
    httpOptions).pipe(map(resp => resp.data[0]));
  }

  getWinnersGraphData(): Observable<winner_option> {
    const url = `${pollHistoryURL}?limit=100&page=1`;
  
    return this.http.get<any>(url, httpOptions).pipe(
      map(resp => {
        const counts: Record<string, number> = {};
  
        for (const poll of resp.data) {
          const winner = this.getWinnerOption(poll.poll_options);
          if (winner && winner !== "None") {
            counts[winner] = (counts[winner] || 0) + 1;
          }
        }
  
        const series: winner_option = JSON.parse(JSON.stringify(chart_data));
        Object.entries(counts).forEach(([winner, count]) => {
          if (series[winner as keyof winner_option]) {
            series[winner as keyof winner_option].count = count;
          }
        });
  
        return series;
      })
    );
  }
  
  

}
