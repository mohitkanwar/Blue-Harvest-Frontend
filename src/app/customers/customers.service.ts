import { HttpClient } from "@angular/common/http";
import * as core from "@angular/core";
import { ListResponse } from "../responseTypes/list-response.model";
import { Observable } from "rxjs";
import { CreateAccountRequestBody } from "../accounts/account.create.body";
import { EnvironmentService } from "../dashboard/environment-settings/environment.service";
@core.Injectable()
export class CustomersService {
    constructor(private http: HttpClient,private environmentService:EnvironmentService) {}

    getUsers() :Observable<ListResponse>{
       return this.http.get<ListResponse>(this.environmentService.getCustomersListAPI());
    }  
    
    openAccount(custID,initialAmount) :Observable<ListResponse>{
        let body:CreateAccountRequestBody = new CreateAccountRequestBody();
        body.customerId=custID;
        body.initialCredit = initialAmount;
        return this.http.post<ListResponse>(this.environmentService.getOpenAccountAPI(),body);
     }  

}