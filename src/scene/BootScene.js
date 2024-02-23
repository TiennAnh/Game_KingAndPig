export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }
  preload() {
    this.load.tilemapTiledJSON("background", "/MapKingAndPig.json");
    this.load.image("terrain", "/assets/Terrain/Terrain (32x32).png");
    this.load.image(
      "decoration",
      "/assets/Decorations/Decorations (32x32).png"
    );
    this.load.image("confetti", "/public/assets/Colision/Confetti (16x16).png");
    this.load.image("live-bar", "/public/assets/HeartDiamond/Live Bar.png");
    this.load.image("tilePig", "/public/assets/TilePig/Kings and Pigs.png");
    this.load.spritesheet(
      "move-right",
      "/assets/SpritePlayer/RunRight(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "move-left",
      "/assets/SpritePlayer/RunLeft(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "idle-right",
      "/public/assets/SpritePlayer/Idle Right(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "idle-left",
      "/public/assets/SpritePlayer/Idle Left(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "king-attack-right",
      "/public/assets/SpritePlayer/Attack Right(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "king-attack-left",
      "/public/assets/SpritePlayer/Attack Left(78x58).png",
      {
        frameWidth: 78,
        frameHeight: 58,
      }
    );
    this.load.spritesheet(
      "idle-pig",
      "/public/assets/SpritePig/Idle (34x28).png",
      {
        frameWidth: 34,
        frameHeight: 28,
      }
    );
    this.load.spritesheet(
      "idle-pigking",
      "/public/assets/SpritePigKing/Idle (38x28).png",
      {
        frameWidth: 38,
        frameHeight: 28,
      }
    );
    this.load.spritesheet(
      "idle-diamond",
      "/public/assets/HeartDiamond/Big Diamond Idle (18x14).png",
      {
        frameWidth: 18,
        frameHeight: 14,
      }
    );
    this.load.spritesheet(
      "idle-heart",
      "/public/assets/HeartDiamond/Big Heart Idle (18x14).png",
      {
        frameWidth: 18,
        frameHeight: 14,
      }
    );
    this.load.spritesheet(
      "diamond-navbar",
      "/public/assets/HeartDiamond/Small Diamond (18x14).png",
      {
        frameWidth: 18,
        frameHeight: 14,
      }
    );
  }

  create() {
    this.scene.start("StartScene");
    // this.scene.start("UIScene");
    // this.scene.start("MapScene");
  }
  update() {}
}
