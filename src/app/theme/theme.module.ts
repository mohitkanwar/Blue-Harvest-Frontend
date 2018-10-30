import { NgModule } from "@angular/core";
import { TopFixedBarComponent } from './top-fixed-bar/top-fixed-bar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatToolbarModule, MatMenu, MatMenuModule, MatIconModule, MatSnackBarModule, MatRippleModule, MatButtonModule} from '@angular/material';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AppRoutinngModule } from "../router/app-routing.module";
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
    TopFixedBarComponent,
    MainLayoutComponent,
    FooterBarComponent,
    NotificationComponent
    ],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      AppRoutinngModule,
      MatSnackBarModule,
      MatRippleModule,
      MatButtonModule

    ],
    providers: [],
    bootstrap: [MainLayoutComponent],
    exports: [MainLayoutComponent,NotificationComponent] 
  })
export class ThemeModule {

}