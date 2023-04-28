class FirstScene extends Phaser.Scene {
    constructor() {
        super('firstscene');
    }
    create() {
        //this.add.text(10,10,"Click to begin.");
        let firstsceneSound = this.sound.add("firstscene", { loop: false });
        let icon = this.add.image(330, 217, 'firstscene');

        firstsceneSound.play();

        icon.alpha = 0;
        this.tweens.add({
            targets: icon,
            alpha:1,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });
        

        this.input.on('pointerdown', () => this.scene.start('secondscene'));
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('firstscene', 'textures/TeaCabinetIcon.png');
        this.load.audio("firstscene", ["sounds/firstscene.mp3"]);
    }
}

class SecondScene extends Phaser.Scene {
    constructor() {
        super('secondscene');
    }
    create() {
        this.add.text(10,10,"second.");
        this.input.on('pointerdown', () => this.scene.start('thirdscene'));
    }
}

class ThirdScene extends Phaser.Scene {
    constructor() {
        super('thirdscene');
    }
    create() {
        this.add.text(10,10,"third.");
        this.input.on('pointerdown', () => this.scene.start('firstscene'));
    }
}

new Phaser.Game({
    width: 660,
    height: 435,
    scene: [FirstScene, SecondScene, ThirdScene],
});