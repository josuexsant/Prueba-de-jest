// game.test.js
const { Jugador, Jefe } = require("./game");

const player1 = new Jugador("Fernando");
const player2 = new Jugador("Viri");
const boss = new Jefe("boss");

describe("Game", () => {
  it("Caso 1: El player1 hace daño al boss", () => {
    player1.hacerDanio();
    expect(boss.vida).toBe(490);
  });

  it("Caso 2: El player2 hace daño al boss", () => {
    player2.hacerDanio();
    expect(boss.vida).toBe(480);
  });
  it("Caso 3: El player1 hace daño al boss nuevamente", () => {
    player1.hacerDanio();
    expect(boss.vida).toBe(470);
  });
    it("Caso 4: El player1 hace daño al boss nuevamente", () => {
    player1.hacerDanio();
    expect(boss.vida).toBe(460);
  });
});
