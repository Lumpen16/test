import { Component, OnInit } from '@angular/core';
import { DataList } from "../data.model"
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data = DataList.data
  tab: string = this.ActivatedRoute.snapshot.queryParamMap.get('tab') || "0"
  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) {

    console.log(this.tab)
  }

  getTabByType(type: string) {
    switch (type) {
      case "Income": return '0';
      case "Outcome": return '1';
      case "Loans": return '2';
      case "Investments": return '3';
      default: return '0';
    }
  }
  getTypeByTab(tab: string) {
    switch (tab) {
      case "0": return "income";
      case "1": return "outcome";
      case "2": return "loan";
      case "3": return 'investment';
      default: return "income";
    }
  }
  getDataByType(type: string) {
    type = this.getTypeByTab(type);
    return this.data.filter((item)=> item.type === type);
  }
  getRandomForDataItem() {
    return Math.ceil(Math.random() * 1000);
  }

  ngOnInit(): void {
  }

}
