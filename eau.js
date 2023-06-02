export class eau extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'eau').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(300, 160);

        this.setSize(300, 160);
        this.setOffset(0, 0);
        this.body.allowGravity = false ;


        this.animseau();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animseau(){
        this.anims.create({
            key: 'eau-anim',
            frames: this.anims.generateFrameNumbers('eau', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.play('eau-anim');
    }

    update() {
        this.visionBox.x = this.x;
        this.visionBox.y = this.y;

    }

    
}