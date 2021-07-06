import { optionalString } from "../utils/types/types";

class AppUser {
  // TODO:1: add more details
  userName: string;
  password: optionalString;

  constructor(userName: string) {
    this.userName = userName;
  }
}

export default AppUser;