import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MatTableModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '../theme/theme.module';
import { OpenCurrentAccountComponent } from './open-current-account/open-current-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    ThemeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [AccountsListComponent, OpenCurrentAccountComponent],
  exports:[AccountsListComponent]
})
export class AccountsModule { }
