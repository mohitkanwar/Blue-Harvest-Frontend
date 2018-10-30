import { HttpClient } from "@angular/common/http";
import { backendAPIs } from "src/environments/backendAPIs";
import * as core from "@angular/core";
import { ListResponse } from "../responseTypes/list-response.model";
import { Observable } from "rxjs";
@core.Injectable()
export class CustomersService {
    constructor(private http: HttpClient) {}

    getUsers() :Observable<ListResponse>{
       return this.http.get<ListResponse>(backendAPIs.customers.list);
    }    

}