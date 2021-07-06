import { generateId } from "../../utils/database/dbUtils";
import { optionalString } from "../../utils/types/types";
import ContactType from "./ContactType";

class MailDomain {
  _id: string;
  addressLine?: Array<string>;
  state: string;
  country: string;
  pincode: string;
  type: ContactType;

  constructor(_id: optionalString, addressLine: Array<string> | null, state: string, country: string, pincode: string, type: ContactType) {
    this._id = _id ? _id : generateId();
    this.state = state;
    this.country = country;
    this.pincode = pincode;
    this.type = type;

    if (addressLine) {
      this.addressLine = addressLine;
    } else {
      addressLine = [];
    }
  }
}

export default MailDomain;