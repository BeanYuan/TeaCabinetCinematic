class firstScene extends Phaser.Scene {
    constructor() {
        super("firstscene");
    }
    create() {
        this.add.text(10, 10, "FirstSecen");
    }
}

let secen = {
    type: Phaser.WEBGL,
    secen: [firstScene],
    width: 500,
    height: 500,
    backgroundColor: 0xffa500
}

let game = new Phaser.Game(secen);