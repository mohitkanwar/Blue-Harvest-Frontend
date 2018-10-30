import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AccountsListComponent implements OnInit {
  @Input("accounts") accounts:Account[];
  columnsToDisplay: string[] = ['id','accountType','balance'];
  expandedAccount:Account=null;
  constructor() { }

  ngOnInit() {
    console.log(this.accounts)
  }


  toggleAccount(account:Account){
    if(this.expandedAccount==account){
      this.expandedAccount = null;
    }
    else{
      this.expandedAccount = account;
    }
  }
}
