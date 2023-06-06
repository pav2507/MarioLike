export class prof extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'prof').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(50, 48);

        this.setSize(32, 48);
        this.setOffset(0, 0);

        this.animsprof();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animsprof(){
        this.anims.create({
            key: 'prof-anim',
            frames: this.anims.generateFrameNumbers('prof', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.play('prof-anim');
    }

    update() {
        this.visionBox.x = this.x;
        this.visionBox.y = this.y;

    }





}    