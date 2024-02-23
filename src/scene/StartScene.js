export default class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }
  preload() {}
  create() {
    const camera = this.cameras.main;
    const cameraWidth = camera.width;
    const cameraHeight = camera.height;

    this.TilePig = this.add
      .image(cameraWidth / 2 - 80, cameraHeight / 4, "tilePig")
      .setOrigin(0);

    this.playButton = this.add
      .text(400, 300, "Play Game", {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#ffffff",
        align: "center",
        fixedWidth: 260,
        backgroundColor: "#2d2d2d",
      })
      .setPadding(20)
      .setOrigin(0.5);

    this.playButton.setPosition(cameraWidth / 2, cameraHeight / 2);

    this.playButton.setInteractive({ useHandCursor: true });

    this.playButton.on("pointerdown", () => {
      this.timedEvent = this.time.delayedCall(300, this.onEvent, [], this);
      this.playButton.setColor("black");
      this.playButton.setBackgroundColor("#8d8d8d");
    });

    this.playButton.on("pointerout", () => {});
  }
  onEvent() {
    this.scene.start("MapScene");
    this.scene.start("UIScene");
  }
  update() {}
}
