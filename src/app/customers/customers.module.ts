import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MatTableModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    ThemeModule
  ],
  declarations: [CustomersListComponent],
  exports:[
    CustomersListComponent
  ],
})
export class CustomersModule { }
