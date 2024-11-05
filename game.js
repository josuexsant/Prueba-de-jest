// game.js
const Singleton = require("./singleton");

class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerDanio() {
    const instance = Singleton.getInstance();
    instance.setData(instance.getData() - 10);
  }
}

class Jefe {
  constructor(nombre) {
    this.nombre = nombre;
  }

  get vida() {
    return Singleton.getInstance().getData();
  }
}

module.exports = { Jugador, Jefe };
