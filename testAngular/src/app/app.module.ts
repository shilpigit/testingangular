import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {RouteModule } from './route/route.module'
import {AppComponent} from './app.component';


// const MainRoutes: Routes = [
//   {
//     path: "", component: HomeComponent
//   },
//   {
//     path: "test", component: HometestComponent
//   }
// ]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,RouteModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
