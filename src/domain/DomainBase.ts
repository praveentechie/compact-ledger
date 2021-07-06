import { generateId } from "../utils/database/dbUtils";
import { optionalString } from "../utils/types/types";

class DomainBase {
  _id: string;
  createTime?: Date;
  updateTime?: Date;
  version?: number;

  constructor(_id?: optionalString) {
    this._id = _id ? _id : generateId();
  }
}

export default DomainBase;