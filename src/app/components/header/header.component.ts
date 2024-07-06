import { Component } from '@angular/core';
import { ReinitializationService } from 'src/app/services/reinitialization.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedDate: any;
  isHiddenStartLable: boolean = false;
  isHiddenEndLable: boolean = false;
  activeTab: string = 'today';
  startDate: Date | null = null;
  endDate: Date | null = null;


  constructor(private reinitializationService: ReinitializationService) { }

  endDateFilter = (d: Date | null): boolean => {
    if (!this.startDate) {
      return true;
    }
    const start = this.startDate;
    return d ? d >= start : true;
  };

  dateRangeFilter(): void {
    this.isHiddenStartLable = !!this.startDate;
    this.isHiddenEndLable = !!this.endDate;

    if (this.startDate && this.endDate) {
      this.reinitializationService.triggerReinit();
    }
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.reinitializationService.triggerReinit();
  }

}
