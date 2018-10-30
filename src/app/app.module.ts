import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutinngModule } from './router/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { NotificationService } from './theme/notification/notification.service';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';
import { AccountsModule } from './accounts/accounts.module';
import { EnvironmentService } from './dashboard/environment-settings/environment.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    BrowserAnimationsModule,
    AppRoutinngModule,
    DashboardModule,
    CustomersModule,
    HttpClientModule,
    MatSnackBarModule,
    AccountsModule
  ],
  providers: [CustomersService,NotificationService,EnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
