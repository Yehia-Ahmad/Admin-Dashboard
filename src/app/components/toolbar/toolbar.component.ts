import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  activeUrl: string = 'dashboard';

  constructor(private router: Router) { }

  activeRoute(url: string) {
    this.activeUrl = url
    url = url.toLowerCase()
    this.router.navigate([url])
  }

}
