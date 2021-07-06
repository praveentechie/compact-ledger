import fs from 'fs';
import path from 'path';
import packageJson from '../package.json';
import { DATABASE } from './constants';
import ElectronCollection from './database/ElectronCollection';
import ElectronDomainBase from './database/ElectronDomainBase';
import { optionalElectronCollection, optionalString } from './types/types';

const WINDOWS = 'win32',
  MAC = 'darwin';

export const isWindows = () => process.platform === WINDOWS;

export const isMac = () => process.platform === MAC;

export const userDataPath = ((): string => {
  let userData;
  if (isWindows()) {
    userData = path.join(process.env.APPDATA || '', packageJson.productName);
  } else if (isMac()) {
    userData = path.join(process.env.HOME || '', 'Library', 'Application Support', packageJson.productName);
  } else {
    userData = path.join('var', 'local', packageJson.productName);
  }
  return userData;  
})();

const _getCollectionFilePath = (collectionName: string): string => path.join(userDataPath, DATABASE.name, `${collectionName}.json`);

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(userDataPath)) {
        fs.mkdirSync(userDataPath);
      }
      let dbPath = path.join(userDataPath, DATABASE.name);
      if (!fs.existsSync(dbPath)) {
        fs.mkdirSync(dbPath);
      }
      resolve(true);
    } catch(e) {
      reject(e);
    }
  })
};

export const initCollection = (collectionName: string) => {
  let collectionPath = _getCollectionFilePath(collectionName);
  if (!fs.existsSync(collectionPath)) {
    fs.closeSync(fs.openSync(collectionPath, 'a'));
  }
};

export const insertDocument = (collection: string, document: ElectronDomainBase) => {
  try {
    let jsonContent = readCollection(collection) || new ElectronCollection(collection, 0, []);
    jsonContent.data.push(document);
    jsonContent.count = jsonContent.data.length;
    writeToCollection(collection, jsonContent);
  } catch (e) {
    console.log('insert doc', e);
  }
};

export const readCollection = (collection: string): optionalElectronCollection => {
  let jsonContent: optionalElectronCollection = null;
  try {
    let content = fs.readFileSync(_getCollectionFilePath(collection));
    // ### typescript: is expecting first param of JSON.parse() to be string. So using 'null' instead of null.
    jsonContent = JSON.parse(content.toString('utf-8') || 'null');
  } catch (e) {
    console.log('read collection', e);
  }
  return jsonContent;
};

export const writeToCollection = (fileName: string, content: ElectronCollection<ElectronDomainBase>) => {
  try {
    fs.writeFileSync(_getCollectionFilePath(fileName), JSON.stringify(content))
  } catch (e) {
    console.log('write collection', e);
  }
};

export const readFile = async (fileName: string): Promise<optionalString> => {
  let jsonContent: optionalString = null;
  try {
    jsonContent = await (fs.readFileSync(path.join(userDataPath, fileName)) || '').toString();
  } catch (e) {
    console.log('read file', e);
  }
  return jsonContent;
};

export const writeToFile = async (fileName: string, content: string): Promise<void> => {
  try {
    return await fs.writeFileSync(path.join(userDataPath, fileName), content);
  } catch (e) {
    console.log('write file', e);
  }
};