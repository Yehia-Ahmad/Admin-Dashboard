import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
  icons: string[] = [
    'gas-station-svgrepo-com',
    'rotate-right',
  ];
  startDate: Date | null = null;
  endDate: Date | null = null;


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private reinitializationService: ReinitializationService) {
    this.intiateIcons();
  }

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

  intiateIcons() {
    this.icons.forEach(icon => {
      const url = `assets/icons/${icon}.svg`;
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }

}
