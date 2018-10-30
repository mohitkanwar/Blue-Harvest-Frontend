import { HttpClient } from "@angular/common/http";
import { backendAPIs } from "src/environments/backendAPIs";
import * as core from "@angular/core";
import { ListResponse } from "../responseTypes/list-response.model";
import { Observable } from "rxjs";
import { CreateAccountRequestBody } from "../accounts/account.create.body";
@core.Injectable()
export class CustomersService {
    constructor(private http: HttpClient) {}

    getUsers() :Observable<ListResponse>{
       return this.http.get<ListResponse>(backendAPIs.customers.list);
    }  
    
    openAccount(custID,initialAmount) :Observable<ListResponse>{
        let body:CreateAccountRequestBody = new CreateAccountRequestBody();
        body.customerId=custID;
        body.initialCredit = initialAmount;
        return this.http.post<ListResponse>(backendAPIs.account.open,body);
     }  

}