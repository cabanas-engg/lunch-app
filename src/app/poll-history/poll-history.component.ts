import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, TopSelling } from '../dashboard/dashboard-components/top-selling/top-selling-data';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-poll-history',
  templateUrl: './poll-history.component.html',
  styleUrls: ['./poll-history.component.scss']
})
export class PollHistoryComponent implements OnInit {
  pollDataSource:MatTableDataSource<any> = new MatTableDataSource();
  loading: boolean = false;
  currentDate: number = Math.floor(Date.now() / 1000);
  currentPage: number = 1;
  pageSize: number = 10;
  totalPolls: number = 0;

  displayedColumns:string[] = [
      'title',
      'date',
      'status',
      'participants',
      'winner',
  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.pollDataSource.paginator = this.paginator
    this.getHistory();
  }

  private getHistory(): void {
    this.loading = true;
    this.apiService.getHistory(this.currentPage, this.pageSize).subscribe(resp => {
      this.pollDataSource.data = resp.data;
      this.totalPolls = resp.pagination.total;
      this.loading = false;
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pollDataSource.filter = filterValue.trim().toLowerCase();
  }

  setPage(page:number, size:number):void {
    this.currentPage = page + 1;
    this.pageSize = size;
    this.getHistory();
  }

  navigateToPoll(poll_id: string): void {
    window.open("https://strawpoll.com/" + poll_id, "_blank")
  }

}
