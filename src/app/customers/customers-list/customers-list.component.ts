import { Component, OnInit, Inject } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../customers.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NotificationService } from 'src/app/theme/notification/notification.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent} from '@angular/material';
import { OpenCurrentAccountComponent } from 'src/app/accounts/open-current-account/open-current-account.component';


export interface DialogData {
  initialAmount: number;
  isCanceled:boolean;
}

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  entryComponents:[]
})
export class CustomersListComponent implements OnInit {
  customers : Customer[];
  columnsToDisplay: string[] = ['customerId','givenName','surname'];
  private expandedCustomer: Customer;
  private showAccountsList:boolean = false;
  private accountDetailsLinkText:string = "show details";
  private initialAmount:number;
  totalNumberOfCustomers:number;
  pageNumber:number;
  pageSize:number;
  pageEvent: PageEvent;
  constructor(private customerService:CustomersService,private notificationService:NotificationService,public dialog: MatDialog) { }

  ngOnInit() {
    this.pageNumber = 0;
    this.pageSize = 5;
    let localPageEvent:PageEvent = new PageEvent();
    localPageEvent.pageIndex=0;
    localPageEvent.pageSize = 5;
    this.getPaginatedCustomers(localPageEvent);
  }
   getPaginatedCustomers(pageEvent:PageEvent) :PageEvent{
    this.customerService.getUsers(pageEvent.pageIndex, pageEvent.pageSize)
      .subscribe(response => {
        console.log(response);
        if (response.status === "SUCCESS") {
          this.customers = response.dataList;
          this.totalNumberOfCustomers = response.totalCount;
          this.pageNumber = response.pageNumber;
          this.pageSize = response.pageSize;
        }
        else {
          //Throw error that customers cannot be found
          this.notificationService.sendNotification("Failure");
        }
      }, error => {
        console.log(error);
        console.log("an error has  been caught");
        this.notificationService.sendNotification("An error has occurred during connecting the service!");
      });
      return pageEvent;
  }

 toggleCustomer(customer:Customer){
   if(this.expandedCustomer==customer){
     this.expandedCustomer = null;
   }
   else{
     this.expandedCustomer = customer;
   }
 }

 toggleAccountDetails(){
   this.showAccountsList = !this.showAccountsList;
   if(this.showAccountsList){
    this.accountDetailsLinkText = "hide details";
   }
   else{
    this.accountDetailsLinkText = "show details";
   }
 }

 confirmAddAccount(){
  const dialogRef = this.dialog.open(OpenCurrentAccountComponent, {
    width: '500px',
    data: { initialAmount: this.initialAmount}
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result!=undefined){
      console.log('Open account for '+this.expandedCustomer.customerId +' With initial amount'+result.initialAmount);
      console.log(result);
      this.customerService.openAccount(this.expandedCustomer.customerId,result.initialAmount).subscribe(response => {
        console.log(response);
        if(response.status==="SUCCESS"){
          this.notificationService.sendNotification("Account Created Successfully!");
          this.ngOnInit();
        }
        else{
          //Throw error that customers cannot be found
            this.notificationService.sendNotification("An Error Occurred during account opening!");
          
        }
    },
    error =>{
      console.log(error);
      console.log("an error has  been caught")
      this.notificationService.sendNotification("An error has occurred!");
    })
    }
  });
 }
} 

