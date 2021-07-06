import ContactType from "./ContactType";

class EmailDomain {
  emailId: string;
  type: ContactType;

  constructor(emailId: string, type: ContactType) {
    this.emailId = emailId;
    this.type = type;
  }
}

export default EmailDomain;