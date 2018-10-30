import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MatTableModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '../theme/theme.module';
import { AccountsModule } from '../accounts/accounts.module';
import { OpenCurrentAccountComponent } from '../accounts/open-current-account/open-current-account.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    ThemeModule,
    AccountsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [CustomersListComponent],
  exports:[
    CustomersListComponent
  ],
  entryComponents:[OpenCurrentAccountComponent]
})
export class CustomersModule { }
