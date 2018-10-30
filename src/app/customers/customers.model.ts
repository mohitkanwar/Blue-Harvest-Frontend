import{Account} from './account.model';
export class Customer {
    customerId :number;
    givenName:string;
    surname:string;
    accounts:Account[];
}