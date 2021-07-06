import DomainBase from "../../DomainBase";

class Account extends DomainBase {
  groupId: string;
  name: string = '';
  amount: number = 0;
  description?: string;

  constructor(groupId: string) {
    super(null);
    this.groupId = groupId;
  }
}

export default Account;