import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { NotificationService } from 'src/app/theme/notification/notification.service';

@Component({
  selector: 'app-environment-settings',
  templateUrl: './environment-settings.component.html',
  styleUrls: ['./environment-settings.component.css']
})
export class EnvironmentSettingsComponent implements OnInit {

  constructor(private environmentService:EnvironmentService, private notification:NotificationService) { }
  @Input() baseUrl:string;
  ngOnInit() {
    this.baseUrl = this.environmentService.backendUrl;
  }
  ngOnSave(){
    console.log(this.baseUrl);
    this.environmentService.backendUrl=this.baseUrl;
    this.notification.sendNotification("Environment Updated!");
  }
}
