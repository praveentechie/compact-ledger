import ElectronDomainBase from '../utils/database/ElectronDomainBase';

export default class Transaction extends ElectronDomainBase {
  entryType: string;
  dateTime: string;
  amount: number;

  constructor(entryType: string, dateTime: string, amount: number) {
    super();
    this.entryType = entryType;
    this.dateTime = dateTime;
    this.amount = amount;
  }
}
