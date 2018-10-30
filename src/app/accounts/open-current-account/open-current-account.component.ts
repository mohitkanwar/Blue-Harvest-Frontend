import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from 'src/app/customers/customers-list/customers-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-open-current-account',
  templateUrl: './open-current-account.component.html',
  styleUrls: ['./open-current-account.component.css']
})
export class OpenCurrentAccountComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpenCurrentAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.data.isCanceled = true;
  }
  onNoClick(): void {
    this.data.isCanceled = true;
    this.dialogRef.close();

  }
  onYesWithoutInitial(){
    this.data.isCanceled = false;
    this.data.initialAmount = 0;
    this.dialogRef.close(this.data);
  }
  onYesWithInitial(){
    this.data.isCanceled = false;
    if(this.data.initialAmount==undefined){
      this.data.initialAmount = 0;
    }
    this.dialogRef.close(this.data);
  }
}
