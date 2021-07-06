import moment from 'moment';
import { FORMATS } from '../utils/constants';
import ElectronDomainBase from '../utils/database/ElectronDomainBase';

window.moment = moment;
class Transaction extends ElectronDomainBase {
  entryType: string;
  dateTime: string;
  amount: number = 0;
  account: string = '';
  category?: string;
  notes?: string;

  constructor(entryType: string, dateTime: string) {
    super();
    this.entryType = entryType;
    this.dateTime = dateTime;
  }

  public dateObject () {
    let formattedDate = moment(this.dateTime, FORMATS.LONG_DATE_TIME_UTC).format(FORMATS.DEFAULT_DATE);
    console.log('return', formattedDate)
    return formattedDate;
  }

  static initObject(transaction: Transaction) {
    return new Transaction(transaction.entryType, transaction.dateTime);
  }
}

export default Transaction;
