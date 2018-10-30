import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private showNotification:boolean;
  private message:string;
  constructor(private notificationService:NotificationService, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.showNotification = false;
    this.notificationService.notificationEvent.subscribe(message=>{
      console.log(message);
      this.showNotification=true;
      this.message=message.message;
      let config = new MatSnackBarConfig();
      config.verticalPosition= 'top';
      config.duration = 8000;
      config.horizontalPosition='end';
      config.panelClass='notificationPanel';
      this.snackbar.open(this.message,'Close', config)
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.showNotification = false;
        this.message='';
   }, 5000);
    });
  }


}
