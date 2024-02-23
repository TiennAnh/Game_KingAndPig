export default class MapScene extends Phaser.Scene {
  constructor() {
    super("MapScene");
  }
  preload() {}
  create() {
    const map = this.make.tilemap({ key: "background" });

    const tileset1 = map.addTilesetImage("Terrain", "terrain");
    const tileset2 = map.addTilesetImage("Decorations", "decoration");
    const tileset3 = map.addTilesetImage("Confetti", "confetti");

    const backGround = map.createLayer("BackGround", [tileset1]);
    const decorations = map.createLayer("Decorations", [tileset2]);

    const colison = map.createLayer("Colision", [tileset3]).setAlpha(0.01);
    colison.setCollisionByProperty({ Colision: true });
    // this.cameras.main.centerOn(500, 300);

    this.player = this.physics.add.sprite(200, 450, "idle-right");
    this.physics.add.collider(this.player, colison);
    // this.player.setCollideWorldBounds(true);
    this.anims.create({
      key: "turn-right",
      frames: this.anims.generateFrameNumbers("move-right", {
        start: 0,
        end: 7,
      }),
    });
    this.anims.create({
      key: "turn-left",
      frames: this.anims.generateFrameNumbers("move-left", {
        start: 0,
        end: 7,
      }),
    });
    this.anims.create({
      key: "idle Right",
      frames: this.anims.generateFrameNumbers("idle-right", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idle Left",
      frames: this.anims.generateFrameNumbers("idle-left", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.pig = this.physics.add.sprite(650, 440, "idle-pig");
    this.physics.add.collider(this.pig, colison);
    // this.physics.add.collider(this.pig, this.player);
    this.anims.create({
      key: "idle-pig",
      frames: this.anims.generateFrameNumbers("idle-pig", {
        start: 0,
        end: 10,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.pigKing = this.physics.add.sprite(990, 300, "idle-pigking");
    this.physics.add.collider(this.pigKing, colison);
    this.anims.create({
      key: "idle-pigking",
      frames: this.anims.generateFrameNumbers("idle-pigking", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // this.anims.create({
    //   key: "idle-diamond",
    //   frames: this.anims.generateFrameNumbers("idle-diamond", {
    //     start: 0,
    //     end: 9,
    //   }),
    // });
    // this.physics.add.sprite(400, 400, "idle-diamond");

    // this.diamond = this.physics.add.group({
    //   key: "idle-diamond",
    //   repeat: 5,
    //   setXY: { x: 150, y: 150, stepX: 300 },
    // });

    this.diamond = this.physics.add.sprite(200, 460, "idle-diamond");
    this.physics.add.collider(this.diamond, colison);
    this.anims.create({
      key: "idle-diamond",
      frames: this.anims.generateFrameNumbers("idle-diamond", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: 1,
    });

    this.heart = this.physics.add.sprite(300, 460, "idle-heart");
    this.physics.add.collider(this.heart, colison);
    this.anims.create({
      key: "idle-heart",
      frames: this.anims.generateFrameNumbers("idle-heart", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // const configDiamond = {
    //   key: "idle-Diamond",
    //   x: { randInt: [0, 1000] },
    //   y: { randInt: [100, 300] },
    //   anims: "idle-diamond",
    // };

    // for (let i = 0; i < 10; i++) {
    //   this.make.sprite(configDiamond);
    // }

    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.cameras.main.setBounds(0, 0, 1250, 600);
    this.cameras.main.setZoom(1);

    this.lastDirection = "Right";

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    this.pig.anims.play("idle-pig", true);
    this.pigKing.anims.play("idle-pigking", true);
    this.diamond.anims.play("idle-diamond", true);
    this.heart.anims.play("idle-heart", true);

    if (this.cursors.right.isDown) {
      this.player.setVelocityX(150);
      this.player.anims.play("turn-right", true);
      this.lastDirection = "Right";
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-150);
      this.player.anims.play("turn-left", true);
      this.lastDirection = "Left";
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play(`idle ${this.lastDirection}`, true);
    }
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-150);
    }
  }
}