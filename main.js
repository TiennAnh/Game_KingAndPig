import BootScene from "./src/scene/BootScene";
import MapScene from "./src/scene/MapScene";
import StartScene from "./src/scene/StartScene";
import UIScene from "./src/scene/UIScene";

export default class MyGames extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 400,
      scene: [BootScene, StartScene, MapScene, UIScene],
      parent: "phaser-example",
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
          gravity: { y: 350 },
        },
      },
    };
    super(config);
  }
}
new MyGames();
