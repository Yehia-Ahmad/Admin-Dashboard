import { Component } from '@angular/core';
import gasStations from 'src/app/core/json-data/gas-stations.json';

@Component({
  selector: 'dashboard-gas-station-info',
  templateUrl: './gas-station-info.component.html',
  styleUrls: ['./gas-station-info.component.scss']
})
export class GasStationInfoComponent {

  activeTab: string = 'list';
  isGraph: boolean = false;
  gasStations: any[] = gasStations;

  constructor() { }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.isGraph = !this.isGraph;
  }

  deleteStationElement(station: any) {
    const index = this.gasStations.indexOf(station);
    this.gasStations.splice(index, 1);
  }

}
