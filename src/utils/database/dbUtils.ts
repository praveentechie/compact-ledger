const { v4: uuid4 } = require('uuid');

export const generateId = ():string => uuid4();