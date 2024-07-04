import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import gasStations from 'src/app/core/json-data/gas-stations.json';

@Component({
  selector: 'dashboard-gas-station-info',
  templateUrl: './gas-station-info.component.html',
  styleUrls: ['./gas-station-info.component.scss']
})
export class GasStationInfoComponent {

  activeTab: string = 'list';
  isGraph: boolean = false;
  icons: string[] = [
    'chart',
    'list',
    'three-dots',
    'gas-station-svgrepo-com-4',
  ];

  gasStations: any[] = gasStations;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.intiateIcons();
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.isGraph = !this.isGraph;
  }

  intiateIcons() {
    this.icons.forEach(icon => {
      const url = `assets/icons/${icon}.svg`;
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url));
    });
  }

  deleteStationElement(station: any) {
    const index = this.gasStations.indexOf(station);
    this.gasStations.splice(index, 1);
  }

}
