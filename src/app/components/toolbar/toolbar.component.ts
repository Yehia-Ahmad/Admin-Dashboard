import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dashboard-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  icons: string[] = [
    'PMS',
    'control-room',
    'dashboard',
    'elements',
    'settings',
    'notifications',
    'logout'
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.initiateIcons();
  }

  initiateIcons() {
    this.icons.forEach(icon => {
      const url = `assets/icons/${icon}.svg`;
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }

}
