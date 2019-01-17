import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { HometestComponent } from '../hometest/hometest.component';

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
    HomeComponent,
    HometestComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(MainRoutes)
  ],
  exports: [RouterModule]
})



export class RouteModule { }
