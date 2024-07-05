import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'dashboard-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss']
})
export class StatisticsChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef | undefined;
  chartInstance: echarts.ECharts | undefined;

  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Gesr El-Suaz', 'El-Obour', '5th Settlement', 'Nasr City', 'El-Shorouk', 'El-Sheikh Zayed']
    },
    yAxis: {
      type: 'value'
    },
    color: ['#FF7F5C'],
    series: [
      {
        data: [250, 140, 200, 230, 120, 100, 300],
        type: 'bar',
        barWidth: '20%',
      }
    ]
  };

  tabs: string[] = ['sales', 'transaction', 'value', 'compression'];
  activeTab: string = 'sales';

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    if (this.chartContainer) {
      this.cdRef.detectChanges();
      const container = this.chartContainer.nativeElement;

      if (container.clientWidth === 0 || container.clientHeight === 0) {
        setTimeout(() => this.initChart(), 100);
      } else {
        if (!this.chartInstance) {
          this.chartInstance = echarts.init(container);
        }
        this.chartInstance.setOption(this.option);
      }
    }
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
    this.updateChartOptions(tab);
    this.initChart();
  }

  private updateChartOptions(tab: string): void {
    const series = this.option.series as SeriesOption[];
    switch (tab) {
      case 'sales':
        series[0].data = [250, 140, 200, 230, 120, 100, 300];
        break;
      case 'transaction':
        series[0].data = [150, 240, 180, 260, 130, 170, 210];
        break;
      case 'value':
        series[0].data = [300, 200, 250, 280, 190, 220, 270];
        break;
      case 'compression':
        series[0].data = [100, 90, 120, 140, 80, 60, 110];
        break;
      default:
        series[0].data = [250, 140, 200, 230, 120, 100, 300];
    }
    if (this.chartInstance) {
      this.chartInstance.setOption(this.option);
    }
  }

}
