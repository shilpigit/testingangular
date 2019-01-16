import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HometestComponent } from './hometest/hometest.component';

const MainRoutes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "test", component: HometestComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HometestComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
