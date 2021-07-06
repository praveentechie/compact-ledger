import DomainBase from "../DomainBase";
import { optionalString } from "../../utils/types/types";
import PhoneDomain from "./PhoneDomain";
import EmailDomain from "./EmailDomain";
import MailDomain from "./MailDomain";

class Contact extends DomainBase {
  name: string;
  company?: string;
  phoneNumbers?: Array<PhoneDomain>;
  emailAddressess?: EmailDomain[];
  mailingAddressess?: Array<MailDomain>;

  constructor(_id: optionalString, name: string, company?: string,
    phoneNumbers?: Array<PhoneDomain>, emailAddressess?: EmailDomain[],
    mailingAddressess?: Array<MailDomain>) {
      super(_id);
      this.name = name;
      this.company = company;
      this.phoneNumbers = phoneNumbers;
      this.emailAddressess = emailAddressess;
      this.mailingAddressess = mailingAddressess;
  }
}

export default Contact;