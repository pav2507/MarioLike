export class boss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.visionBox = this.scene.physics.add.sprite(375, 1312, 'ennemi2').setVisible(false);
        this.visionBox.body.allowGravity = false;
        this.visionBox.setSize(450, 150);

        this.setSize(32, 48);
        this.setOffset(0, 0);
        this.animsennemi2();

        this.shurikenGroup = scene.physics.add.group(); // Groupe pour stocker les shurikens
        this.shurikenDelay = 500; // Délai entre chaque création de shuriken (2 secondes)
        this.lastShurikenTime = 0; // Temps écoulé depuis la dernière création de shuriken

        this.damage = 0.5;


        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    animsennemi2(){
        this.anims.create({
            key: 'boss-anim',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 2 }),
            frameRate: 7,
            repeat: -1
        });
        this.play('boss-anim');
    }

    createShuriken() {
        const shuriken = this.shurikenGroup.create(this.x, this.y, 'shuriken');
        shuriken.setVelocityX(this.scene.player.x > this.x ? 350 : -350); // Définit la vitesse du shuriken en fonction de la position du joueur
        shuriken.damage = this.damage; // Attribue les dégâts infligés au shuriken
    
        // Gestion de la collision entre le shuriken et le joueur
        this.scene.physics.add.collider(shuriken, this.scene.player, () => {
            this.scene.player.takeDamage(1); // ça bug ici
            shuriken.destroy(); // Supprimer le shuriken   
        });
    }


    update(time, delta) {
        if(!this.body) return;

        this.visionBox.x = this.x;
        this.visionBox.y = this.y;

        // Vérification de la collision entre la visionBox et le joueur
        if (this.scene.physics.overlap(this.visionBox, this.scene.player)) {
            // Crée un projectile lorsque l'ennemi est proche du joueur et que le délai est écoulé
            if (Math.abs(this.x - this.scene.player.x) < 100 && time > this.lastShurikenTime + this.shurikenDelay) {
                this.createShuriken();
                this.lastShurikenTime = time; // Met à jour le temps de la dernière création de shuriken
            }
        } else {
            // Le joueur n'est pas détecté, l'ennemi se déplace de gauche à droite
            // Mettez ici votre logique de mouvement de gauche à droite sans modification de la position de l'ennemi
        }
        if (this.scene.physics.overlap(this.visionBox, this.scene.player)) {

        }
    }

    destroy(){
        this.visionBox.destroy();
        super.destroy();
    }
}