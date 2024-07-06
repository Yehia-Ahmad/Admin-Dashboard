import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-coming-feature',
  templateUrl: './coming-feature.component.html',
  styleUrls: ['./coming-feature.component.scss']
})
export class ComingFeatureComponent {

  constructor(private router: Router) { }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
