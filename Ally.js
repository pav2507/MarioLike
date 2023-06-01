export class Ally extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'allie1').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(50, 48);

        this.setSize(32, 48);
        this.setOffset(0, 0);

        this.animsally();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animsally(){
        this.anims.create({
            key: 'ally-annim',
            frames: this.anims.generateFrameNumbers('allie1', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.play('ally-annim');
    }

    update() {
        this.visionBox.x = this.x;
        this.visionBox.y = this.y;

    }





}    