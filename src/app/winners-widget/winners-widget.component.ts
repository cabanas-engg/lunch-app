import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions
} from 'ng-apexcharts';
import { chart_data, winner_option } from './winners-data';
import { ApexOptions } from 'apexcharts';
import * as ApexCharts from 'apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  labels: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  chartOptions: ApexOptions | any;
  options: ApexOptions | any;

};

@Component({
  selector: 'app-winners-widget',
  templateUrl: './winners-widget.component.html',
  styleUrls: ['./winners-widget.component.scss']
})
export class WinnersWidgetComponent implements OnInit {
  salesChartOptions: Partial<salesChartOptions> = {};
  chartData: winner_option = chart_data;

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.apiService.getWinnersGraphData().subscribe((resp: winner_option) => {
      const labels: string[] = [];
      const series: number[] = [];
      const colors: string[] = [];

      for (const key in resp) {
        const item = resp[key as keyof winner_option];
        if (item.count > 0) {
          labels.push(key);
          series.push(item.count);
          colors.push(item.color);
        }
      }

      this.salesChartOptions = {
        series,
        labels,
        chart: {
          fontFamily: 'Space Grotesk, sans-serif',
          height: 300,
          type: 'donut',
          toolbar: { show: false },
          background: 'transparent',
          animations: {
            enabled: true,
            easing: 'easeout',
            speed: 700
          }
        },
        colors,
        stroke: {
          width: 0
        },
        legend: {
          position: 'bottom',
          fontSize: '14px',
          fontWeight: 500,
          labels: { colors: '#555' },
          itemMargin: { horizontal: 10, vertical: 5 }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            colors: ['#fff']
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.5
          },
          formatter: (val: any, opts: any) => labels[opts.seriesIndex]
        },
        tooltip: {
          theme: 'dark',
          y: {
            formatter: (val: number) => `${val} win${val == 1 ? '' : 's'}`
          }
        },
        options: {
          pie: {
            donut: {
              size: '70%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '18px',
                  fontWeight: 600,
                  offsetY: -5
                },
                value: {
                  show: true,
                  fontSize: '16px',
                  fontWeight: 500,
                  offsetY: 5,
                  formatter: (val: string) => `${val} wins`
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#999',
                  fontSize: '15px',
                  fontWeight: 500,
                  formatter: (w: any) => {
                    const total = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
                    return `${total}`;
                  }
                }
              }
            }
          }
        },
        grid: {
          padding: { top: 0, right: 0, bottom: 0, left: 0 }
        }
      };
    });
  }
}
