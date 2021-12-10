import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataList } from './data.model'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {
    path: "",
    component: SummaryComponent,
    pathMatch: "full"
  },
  // {
  //   path: "",
  //   children: [
  //     {
  //       path: "navigator/:tab",
  //       component: ListComponent,
  //       pathMatch: "full"
  //     }
  //   ]
  // },
  {
    path: "navigator/:tab",
    component: ListComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: ListComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataList],
  bootstrap: [AppComponent]
})
export class AppModule { }
