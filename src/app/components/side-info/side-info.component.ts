import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import gasStationSales from '../../core/json-data/gas-station-sales.json';

@Component({
  selector: 'dashboard-side-info',
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.scss']
})
export class SideInfoComponent implements AfterViewInit {

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef | undefined;
  chartInstance: echarts.ECharts | undefined;
  gasStationSales: any[] = gasStationSales;

  option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    radar: {
      indicator: [
        { text: '24:00', max: 100 },
        { text: '22:00', max: 100 },
        { text: '20:00', max: 100 },
        { text: '18:00', max: 100 },
        { text: '16:00', max: 100 },
        { text: '14:00', max: 100 },
        { text: '12:00', max: 100 },
        { text: '10:00', max: 100 },
        { text: '08:00', max: 100 },
        { text: '06:00', max: 100 },
        { text: '04:00', max: 100 },
        { text: '02:00', max: 100 }
      ],
      center: ['50%', '50%'],
      radius: '75%'
    },
    series: [
      {
        name: 'Sales Data',
        type: 'radar',
        areaStyle: {
          color: '#009ACF33'
        },
        lineStyle: {
          color: '#009ACF'
        },
        data: [
          {
            value: [90, 70, 80, 50, 60, 70, 80, 90, 70, 60, 50, 80],
            name: 'Data Set 1'
          },
          {
            value: [70, 80, 60, 90, 70, 60, 50, 70, 80, 90, 60, 70],
            name: 'Data Set 2'
          }
        ]
      }
    ]
  };

  constructor(private cdRef: ChangeDetectorRef) { }

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

}
