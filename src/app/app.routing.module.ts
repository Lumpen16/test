import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './list/list.component'
import {NgModule} from "@angular/core";
import {SummaryComponent} from "./summary/summary.component";



const routes: Routes = [
  {
    path: "/navigator:tab",
    component: ListComponent,

  },
  {
    path: "",
    component: SummaryComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
