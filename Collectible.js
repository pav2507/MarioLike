export class Collectible extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'collec').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(16, 16);

        this.setSize(16, 16);
        this.setOffset(0, 0);

        this.animscollec();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animscollec(){
        this.anims.create({
            key: 'collec-anim',
            frames: this.anims.generateFrameNumbers('collec', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.play('collec-anim');
    }

    update() {
        this.visionBox.x = this.x;
        this.visionBox.y = this.y;

    }

}