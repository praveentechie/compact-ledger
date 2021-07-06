import DomainBase from "../../DomainBase";
import TransactionType from "../../TransactionType";

import { optionalBoolean } from "../../../utils/types/types";

class TransactionCategory extends DomainBase {
  name: string = '';
  type: TransactionType;
  subCategory: optionalBoolean = null;
  parentCategoryId?: string;

  constructor(type: TransactionType) {
    super(null);
    this.type = type;
  }
}

export default TransactionCategory;