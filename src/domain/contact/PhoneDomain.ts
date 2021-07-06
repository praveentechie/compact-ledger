import DomainBase from "../DomainBase";
import ContactType from "./ContactType";

class PhoneDomain extends DomainBase {
  number: string;
  type: ContactType;

  constructor(number: string, type: ContactType) {
    super();
    this.number = number;
    this.type = type;
  }
}

export default PhoneDomain;