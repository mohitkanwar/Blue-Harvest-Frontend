import{Account} from '../accounts/account.model';
export class Customer {
    customerId :number;
    givenName:string;
    surname:string;
    accounts:Account[];
}