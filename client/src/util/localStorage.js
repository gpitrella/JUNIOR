export class LocalStorage {

  static saveItem(key, itemToSave) {
    localStorage.setItem(key, convertObjectToJson(itemToSave));
  }

  static getItem(key) {
    return convertJsonToObject(localStorage.getItem(key));
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

}

const convertObjectToJson = function(object) {
  return JSON.stringify(object);
}

const convertJsonToObject = function(json) {
  return JSON.parse(json);
}