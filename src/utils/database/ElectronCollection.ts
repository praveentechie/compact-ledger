import ElectronDomainBase from './ElectronDomainBase';

export default class ElectronCollection<T extends ElectronDomainBase> {
  readonly name: string;
  count: number;
  data: Array<T>;

  constructor(name: string, count: number, data: Array<T>) {
    this.name = name;
    this.count = count;
    this.data = data;
  }
}