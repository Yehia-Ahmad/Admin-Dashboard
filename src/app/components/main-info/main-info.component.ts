import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReinitializationService } from 'src/app/services/reinitialization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dashboard-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  loading: boolean = false;
  isListLoading: boolean = false;
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

  constructor(private reinitializationService: ReinitializationService) { }

  ngOnInit() {
    this.subscription = this.reinitializationService.reinit$.subscribe(() => {
      this.reinitializeMainInfo();
    });
  }

  private reinitializeMainInfo() {
    this.activeTab = this.tabsContent[0].name;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  changeTab(tabName: string) {
    this.activeTab = tabName;
    this.isListLoading = true;
    setTimeout(() => {
      this.isListLoading = false;
    }, 3000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
