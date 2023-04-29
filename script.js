class FirstScene extends Phaser.Scene {
    constructor() {
        super('firstscene');
    }
    create() {
        //this.add.text(10,10,"Click to begin.");
        // debug keyboard remember to delete
        let one = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        one.on('down', () => {
            this.scene.start('firstscene')
        });
        let two = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        two.on('down', () => {
            this.scene.start('secondscene');
            firstsceneSound.stop();
        });
        let three = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        three.on('down', () => {
            this.scene.start('thirdscene');
            firstsceneSound.stop();
        });

        let firstsceneSound = this.sound.add("firstscene", { loop: false });
        let icon = this.add.image(330, 217, 'firstscene');

        firstsceneSound.play();

        icon.alpha = 0;
        this.tweens.add({
            targets: icon,
            alpha:1,
            duration: 10000,
            ease: 'Linear',
            repeat: 0,
        });
        
        this.time.delayedCall(10000, () => {
            this.input.on('pointerdown', () => this.scene.start('secondscene'));
        });
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('firstscene', 'textures/TeaCabinet_Game.png');
        this.load.audio("firstscene", ["sounds/firstscene.mp3"]);
    }
}

class SecondScene extends Phaser.Scene {
    constructor() {
        super('secondscene');
    }
    create() {
        this.add.text(10,10,"second.");
        let secondsceneSound = this.sound.add("secondscene", { loop: true });
        secondsceneSound.play();

        let scene = this.add.image(0, 217, 'secondscene'); // 330 217
        scene.setScale(0.5);
        let character = this.add.image(0, 180, 'character'); // 360 180
        scene.setScale(0.5);
        this.tweens.add({
            targets: scene,
            x:330,
            y:217,
            duration: 1000,
            ease: 'Linear',
            repeat: 0,
        });
        this.tweens.add({
            targets: character,
            x:360,
            y:180,
            duration: 1000,
            ease: 'Linear',
            repeat: 0,
        });
        this.time.delayedCall(2000, () => {
            this.add.text(500, 400, "Click to next.");
            this.input.on('pointerdown', () => {
                this.scene.start('thirdscene');
                secondsceneSound.stop()
            });
        });
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('secondscene', 'textures/game cut.png')
        this.load.image('character', 'textures/character/witcher/idle_animation.gif')
        this.load.audio("secondscene", ["sounds/secondscene.mp3"]);
    }
}

class ThirdScene extends Phaser.Scene {
    constructor() {
        super('thirdscene');
    }
    create() {
        let thirdsceneSound = this.sound.add("thirdscene", { loop: true });
        let icon = this.add.image(330, 217, 'thirdscene');
        icon.setScale(0.5);

        thirdsceneSound.play();

        icon.alpha = 0;
        this.tweens.add({
            targets: icon,
            alpha:1,
            duration: 2000,
            ease: 'Linear',
            repeat: 0,
        });
        
        this.time.delayedCall(2000, () => {
            this.input.on('pointerdown', () => {
                this.scene.start('fourthscene');
                thirdsceneSound.stop()
            });
        });

    }
    preload() {
        this.load.path = './assets/';
        this.load.image('thirdscene', 'textures/start menu.png');
        this.load.audio('thirdscene', ['sounds/thirdscene.mp3']);
    }
}

class FourthScene extends Phaser.Scene {
    constructor() {
        super('fourthscene');
    }
    create() {
        this.add.text(-50, 0, `
        Credits:
        Logo: made by Logo Maker
        Image: made by Midjourney and PhotoShop
        Audio: edited by Audacity
        `, { fontSize: 20});
    }
}

new Phaser.Game({
    width: 660,
    height: 435,
    scene: [FirstScene, SecondScene, ThirdScene, FourthScene],
});