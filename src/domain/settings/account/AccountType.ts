import DomainBase from "../../DomainBase";

class AccountType extends DomainBase {
  name: string = '';

  constructor() {
    super(null);
  }
}

export default AccountType;