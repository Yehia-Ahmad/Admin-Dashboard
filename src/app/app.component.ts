import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gas-station-dashboard';
  icons: string[] = [
    'PMS',
    'control-room',
    'dashboard',
    'elements',
    'settings',
    'notifications',
    'logout',
    'chart',
    'list',
    'three-dots',
    'gas-station-svgrepo-com-4',
    'gas-station-svgrepo-com',
    'rotate-right',
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.intiateIcons();
  }

  intiateIcons() {
    this.icons.forEach(icon => {
      const url = `assets/icons/${icon}.svg`;
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url));
    });
  }

}
