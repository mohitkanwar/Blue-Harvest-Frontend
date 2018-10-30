import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard/dashboard.component";
import { CustomersListComponent } from "../customers/customers-list/customers-list.component";
import { EnvironmentSettingsComponent } from "../dashboard/environment-settings/environment-settings.component";

const appRoutes:Routes=[
{path : '', redirectTo : '/index' , pathMatch:'full'},
{path : 'index', component:DashboardComponent},
{path : 'customers', component:CustomersListComponent},
{path : 'settings', component:EnvironmentSettingsComponent},
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutinngModule{

}