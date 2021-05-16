const { v4: uuid4 } = require('uuid');
import ElectronDomainBase from './ElectronDomainBase';
import { initDatabase, initCollection, insertDocument, readFile } from '../systemUtils';
import { optionalString } from '../types/types';

initDatabase();

class Database<T extends ElectronDomainBase> {
  collection: string;
  constructor(collection: string) {
    initCollection(collection);
    this.collection = collection;
  }

  insert(document: T): Promise<optionalString> {
    return new Promise((resolve, reject) => {
      try {
        document._id = uuid4();
        insertDocument(this.collection, document);
        resolve(document._id);
      } catch(e) {
        reject(e);
      }
    })
  }

  getAll(): Promise<Array<T>> {
    return new Promise((resolve, reject) => {
      try {
        let collection = readFile(this.collection);
        if (collection && collection.data) {
          resolve(collection.data.map(entry => entry as T));
        }
        resolve([]);
      } catch(e) {
        reject(e);
      }
    });
  }
}

export default Database;
