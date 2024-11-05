const Singleton = require("./singleton");
const Singleton2 = require("./singleton");

describe("Singleton", () => {
  it("Caso 1: Dos instancias del singleton son la misma", () => {
    const instance1 = Singleton._instance;
    const instance2 = Singleton2._instance;
    expect(instance1).toBe(instance2);
  });
});