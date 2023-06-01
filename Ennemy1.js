export class Ennemycac extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, xstart, xend){
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'ennemi1').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(120, 100);

        this.xstart = xstart;
        this.xend = xend;

        this.setSize(32, 48);
        this.setOffset(0, 0); 
        this.startX = this.x; // Position de départ de l'ennemi
        this.endX = this.x+66; // Position d'arrivée de l'ennemi
        this.isMovingRight = true; // Indicateur de direction initiale

        this.animsennemi1();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animsennemi1(){
        this.anims.create({
            key: 'ennemi1-annim',
            frames: this.anims.generateFrameNumbers('ennemi1', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        this.play('ennemi1-annim');
    }

    

    update(){
        if(!this.body) return;

        this.visionBox.x = this.x;
        this.visionBox.y = this.y;
        
        if (this.isMovingRight){
            this.setFlipX(false);
        } else {
            this.setFlipX(true);
        }

        // Déplacement de l'ennemi de gauche à droite
        if (this.isMovingRight) {
            this.x += 1; // Déplacement vers la droite
            if (this.x >= this.endX) {
                this.isMovingRight = false; // Changer de direction
            }
        } else {
            this.x -= 1; // Déplacement vers la gauche
            if (this.x <= this.startX) {
                this.isMovingRight = true; // Changer de direction
            }
        }
    
        // Vérification de la collision entre la visionBox et le joueur
        if (this.scene.physics.overlap(this.visionBox, this.scene.player)) {
            // Le joueur est détecté, l'ennemi se rue vers lui
            if (this.x < this.scene.player.x) {
                this.x += 2; // Déplacement vers la droite
            } else if (this.x > this.scene.player.x) {
                this.x -= 2; // Déplacement vers la gauche
            }
        } else {
            // Le joueur n'est pas détecté, l'ennemi se déplace de gauche à droite
            if (this.isMovingRight) {
                this.x += 1; // Déplacement vers la droite
                if (this.x >= this.endX) {
                    this.isMovingRight = false; // Changer de direction
                }
            } else {
                this.x -= 1; // Déplacement vers la gauche
                if (this.x <= this.startX) {
                    this.isMovingRight = true; // Changer de direction
                }
            }
        }
    }
    
    destroy(){
        this.visionBox.destroy();
        super.destroy();
    }
}