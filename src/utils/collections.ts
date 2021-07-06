import Database from "./database/ElectronDatabase";
import Transaction from '../domain/Transaction';

export const transactionCollection = new Database<Transaction>('transactions');
