// singleton.js
class Singleton {
  constructor() {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    Singleton._instance = this;
    this.data = 500;
  }

  static getInstance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
}

module.exports = Singleton;
