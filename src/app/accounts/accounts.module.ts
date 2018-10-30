import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MatTableModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    ThemeModule,
  ],
  declarations: [AccountsListComponent],
  exports:[AccountsListComponent]
})
export class AccountsModule { }
