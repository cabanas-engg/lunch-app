import { Component, OnInit } from '@angular/core';
import { Product, TopSelling } from '../dashboard/dashboard-components/top-selling/top-selling-data';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-poll-history',
  templateUrl: './poll-history.component.html',
  styleUrls: ['./poll-history.component.scss']
})
export class PollHistoryComponent implements OnInit {
  page = 0;
  pollDataSource:MatTableDataSource<any> = new MatTableDataSource();
  loading: boolean = false;
  currentDate: number = Math.floor(Date.now() / 1000);

  displayedColumns:string[] = [
      'title',
      'date',
      'status',
      'participants',
      'winner',
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  private getHistory(): void {
    this.loading = true;
    this.apiService.getHistory().subscribe(resp => {
      this.pollDataSource = resp.data;
      this.loading = false;
    })
  }

  setPage(index:number, size:number):void {
    // this.pagedData.setPage(index,size);
    this.getHistory();
  }

  navigateToPoll(poll_id: string): void {
    window.open("https://strawpoll.com/" + poll_id, "_blank")
  }

}
