const { v4: uuid4 } = require('uuid');

class LocalStorage {
  constructor(collection) {
    this.collection = 'transactions' || collection;
    this.documents = this.getAll() || [];
  }

  insert(document) {
    document.id = uuid4();
    this.documents.push(document);
    this._persist();
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.collection));
  }

  _persist() {
    localStorage.setItem(this.collection, JSON.stringify(this.documents));
  }
}

module.exports = LocalStorage;