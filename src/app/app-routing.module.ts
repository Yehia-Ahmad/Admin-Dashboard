import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { ComingFeatureComponent } from './components/coming-feature/coming-feature.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: MainInfoComponent
  },
  {
    path: 'pms',
    component: ComingFeatureComponent
  },
  {
    path: 'control-room',
    component: ComingFeatureComponent
  },
  {
    path: 'elements',
    component: ComingFeatureComponent
  },
  {
    path: 'settings',
    component: ComingFeatureComponent
  },
  {
    path: 'notifications',
    component: ComingFeatureComponent
  },
  {
    path: 'login',
    component: ComingFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
