import { Component, OnInit } from '@angular/core';
import { DataList } from '../data.model'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  data = DataList.data
  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) { }

  getCountByType(type: string) {
    return this.data.filter( item => {
      return item.type === type.toLowerCase()
    }).length
  }

  getTab(type: string) {
    switch (type) {
      case "Income": return '0';
      case "Outcome": return '1';
      case "Loan": return '2';
      case "Investment": return '3';
      default: return '0';
    }
  }

  ngOnInit(): void {
  }

}
