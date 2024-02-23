import MapScene from "./MapScene";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }
  preload() {}
  create() {
    this.add
      .image(0, 0, "live-bar")
      .setOrigin(0, 0)
      .setScale(1.2)
      .setPosition(10, 10);

    this.diamond = this.add
      .sprite(0, 0, "diamond-navbar")
      .setOrigin(0, 0)
      .setScale(1.2)
      .setPosition(30, 50);
    this.anims.create({
      key: "diamond-navbar",
      frames: this.anims.generateFrameNumbers("diamond-navbar", {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.textScore = this.add.text(54, 52, "0", {
      fontSize: 10,
    });

    this.physics.add.overlap(
      this.player,
      this.diamond,
      this.collectDiamond,
      null,
      this
    );
  }

  collectDiamond() {
    this.diamond.disableBody(true, true);
  }

  update() {
    this.diamond.anims.play("diamond-navbar", true);
  }
}
