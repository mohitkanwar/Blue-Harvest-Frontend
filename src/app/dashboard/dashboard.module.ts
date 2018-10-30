import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvironmentSettingsComponent } from './environment-settings/environment-settings.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent,EnvironmentSettingsComponent],
  exports:[
    DashboardComponent,EnvironmentSettingsComponent
  ]
})
export class DashboardModule { }
