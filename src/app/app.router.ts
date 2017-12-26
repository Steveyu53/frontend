import {Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
//用于匹配 目录 的跳转
export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  }
];
