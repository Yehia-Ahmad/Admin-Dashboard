import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-coming-feature',
  templateUrl: './coming-feature.component.html',
  styleUrls: ['./coming-feature.component.scss']
})
export class ComingFeatureComponent {

  constructor() { }

  goToDashboard() {
    window.location.href = '/dashboard';
  }

}
