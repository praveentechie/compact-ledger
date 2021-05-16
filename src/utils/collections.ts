import Database from "./database/ElectronDatabase";
import Transaction from '../modal/Transaction';

export const transactionCollection = new Database<Transaction>('transactions');
