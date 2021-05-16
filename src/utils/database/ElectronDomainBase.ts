import { optionalString } from "../types/types";

export default class ElectronDomainBase {
  // ### typescript: combining types
  _id: optionalString;

  constructor() {
    this._id = null;
  }
}
