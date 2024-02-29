import MapScene from "./MapScene";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
    this.textScoreGems;
    this.scoreGems = 0;
    this.heart;
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

    this.heart = this.add
      .sprite(0, 0, "heart-navbar")
      .setOrigin(0, 0)
      .setScale(1.2)
      .setPosition(23, 22)
      .setAlpha(0.01);
    this.anims.create({
      key: "heart-navbar",
      frames: this.anims.generateFrameNumbers("heart-navbar", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.textScoreGems = this.add.text(54, 52, "0", {
      fontSize: 10,
    });

    this.menuGui = this.add
      .image(0, 0, "gui-menu")
      .setOrigin(0)
      .setScale(0.15)
      .setPosition(10, 200)
      .setInteractive();

    this.menuSetting = this.add
      .image(0, 0, "gui-setting")
      .setOrigin(0)
      .setScale(0.12)
      .setPosition(760, 10)
      .setInteractive();

    this.menuGui.on("pointerdown", () => {
      this.onMenu();
    });

    this.menuSetting.on("pointerdown", () => {
      this.onSetting();
    });
  }

  update() {
    this.diamond.anims.play("diamond-navbar", true);
    this.heart.anims.play("heart-navbar", true);
  }

  increaseGems() {
    this.scoreGems += 1;
    this.textScoreGems.setText(`${this.scoreGems}`);
  }

  increaseHearts() {
    this.heart.setAlpha(2);
  }

  onMenu() {
    this.menuMenu = this.add
      .image(0, 0, "menu-gui-menu")
      .setOrigin(0)
      .setPosition(50, 70);

    this.closeButton = this.add
      .image(0, 0, "close-button")
      .setOrigin(0)
      .setPosition(710, 80)
      .setInteractive();
    this.closeButton.on("pointerdown", () => {
      this.menuMenu.destroy();
      this.closeButton.destroy();
    });
  }

  onSetting() {
    this.menuSetting = this.add
      .image(0, 0, "menu-gui-menu")
      .setOrigin(0)
      .setPosition(50, 70);

    this.closeButton = this.add
      .image(0, 0, "close-button")
      .setOrigin(0)
      .setPosition(710, 80)
      .setInteractive();
    this.closeButton.on("pointerdown", () => {
      this.menuSetting.destroy();
      this.closeButton.destroy();
    });
  }
}
