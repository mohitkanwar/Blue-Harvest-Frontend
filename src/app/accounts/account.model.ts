import { Transaction } from "../customers/transaction.model";

export class Account{
    id :number;
    accountType:string;
    balance:number;
    transactions:Transaction[];

}