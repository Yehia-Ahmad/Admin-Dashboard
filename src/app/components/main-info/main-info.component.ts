import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {

  tabsContent: any[] = [
    {
      value: '71,028',
      unit: 'EGP',
      name: 'Total Value',
      decrease: '2%'
    },
    {
      value: '20,000',
      unit: 'm³',
      name: 'Total Sales',
      increase: '50 m³'
    },
    {
      value: '20,000',
      unit: 'm³',
      name: 'Avg Sales',
      decrease: '50 m³'
    },
    {
      value: '1567',
      unit: '',
      name: 'Total Transaction Count',
      increase: '20'
    },
  ];

  activeTab: string = this.tabsContent[0].name;

  constructor() { }

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }

}
