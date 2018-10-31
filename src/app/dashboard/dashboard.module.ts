import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvironmentSettingsComponent } from './environment-settings/environment-settings.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatTableModule, MatStepperModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatStepperModule,
    MatIconModule
    
  ],
  declarations: [DashboardComponent,EnvironmentSettingsComponent],
  exports:[
    DashboardComponent,EnvironmentSettingsComponent
  ]
})
export class DashboardModule { }
