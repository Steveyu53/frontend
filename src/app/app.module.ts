import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.router';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TaskbarComponent } from './shares/taskbar/taskbar.component';
import { FooterComponent } from './shares/footer/footer.component';
import { HeadComponent } from './shares/head/head.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { SidebarProductComponent } from './sidebar-product/sidebar-product.component';
import { HotProductComponent } from './hot-product/hot-product.component';
import { AdProductComponent } from './ad-product/ad-product.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    IndexComponent,
    AppComponent,
    TaskbarComponent,
    FooterComponent,
    HeadComponent,
    NavigationComponent,
    ProductComponent,
    SidebarProductComponent,
    HotProductComponent,
    AdProductComponent,
    BackToTopComponent
  ],
  //RouterModule.forRoot 接受两个参数，第一个是route数组来表明跳转,第二个可以忽略
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
