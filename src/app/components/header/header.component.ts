import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
  icons: string[] = [
    'gas-station-svgrepo-com',
    'rotate-right',
  ];
  startDate: Date | null = null;
  endDate: Date | null = null;


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.intiateIcons();
  }

  endDateFilter = (d: Date | null): boolean => {
    if (!this.startDate) {
      return true;
    }
    const start = this.startDate;
    return d ? d >= start : true;
  };

  logDates(): void {
    this.startDate ? this.isHiddenStartLable = true : '';
    this.endDate ? this.isHiddenEndLable = true : '';
    if (this.startDate != null && this.endDate != null) {
      console.log('Start Date:', this.startDate);
      console.log('End Date:', this.endDate);
    }
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  intiateIcons() {
    this.icons.forEach(icon => {
      const url = `assets/icons/${icon}.svg`;
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }

}
