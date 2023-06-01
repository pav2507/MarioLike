export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.scene = scene;

        this.setPipeline("light2D")


        this.initPlayer(); // c'est comme un create
        
    }

    initPlayer() {

        this.setSize(20, 40);
        this.setOffset(6, 9);


        this.cursors = this.scene.input.keyboard.createCursorKeys();

        this.alive = true;
        this.hp = 3;

        // varaiable double saut 
        this.hasDoubleJumped = false;

        // Créer l'objet de texte
        this.hpText = this.scene.add.text(50, 2, this.hp, { fontSize: '32px', fill: '#000000', fontFamily: 'Arial, sans-serif' }).setOrigin(0, 0).setScrollFactor(0).setDepth(12000);

        this.spawnX = 30
        this.spawnY = 1300


    }

    takeDamage(damage) {
        this.hp -= damage;

        this.hpText.setText(this.hp);

        if (this.hp <= 1) {
            this.playDeathAnimation()
            //this.disableBody(true, true); // Désactive le corps physique du joueur et masque le sprite

            // Par exemple, tu peux utiliser un délai avant de déclencher le respawn
            this.scene.time.delayedCall(2000, this.respawn, [], this);
        }
    }

    playDeathAnimation() {

        // Puis, dans la fonction playDeathAnimation, tu peux lancer l'animation
        this.anims.stop()
        this.anims.play('death', true);
    }

    respawn() {
        const spawnX = 30;
        const spawnY = 1300;

        this.enableBody(true, spawnX, spawnY, true, true);
        this.hp = 3;
        this.hpText.setText( this.hp);

        // Effectue d'autres actions de respawn si nécessaire
    }





    update() {


        if (this.body.blocked.down) this.hasDoubleJumped = false;

        if (this.cursors.left.isDown) { //si la touche gauche est appuyée
            this.setVelocityX(-75); //alors vitesse négative en X
            this.anims.play('left', true); //et animation => gauche
        }
        else if (this.cursors.right.isDown) { //sinon si la touche droite est appuyée
            this.setVelocityX(75); //alors vitesse positive en X
            this.anims.play('right', true);
            //et animation => droite
        }
        else { // sinon
            this.setVelocityX(0); //vitesse nulle
            this.anims.play('turn'); //animation fait face caméra
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
            if (this.body.blocked.down) {//saut normal
                //si touche haut appuyée ET que le perso touche le sol
                this.setVelocityY(-200); //alors vitesse verticale négative
                //(on saute)
            }
            else if (!this.hasDoubleJumped) {// double saut ( rajouter spritesheet de double saut)
                this.setVelocityY(-200); //alors vitesse verticale négative
                this.hasDoubleJumped = true;
            }
        }
        if (this.cursors.up.isDown && this.body.blocked.right) { // si la touche du haut est appuyée
            // et qu'il touhe un mur en allant vers la droite.

            this.setVelocityY(-200) // alors vitesse verticale négative 
        }
        if (this.cursors.up.isDown && this.body.blocked.left) { // si la touche du haut est appuyée 
            // et qu'il touche un mur en allant vers la gauche.
            this.setVelocityY(-200)


            if (this.cursors.up.isDown && (!this.hasDoubleJumped || this.body.velocity.y === 0)) {
                this.setVelocityY(-200);
            }
        }


        // Déclarez une variable pour stocker la position Y précédente
        let previousY = this.y;

        // Dans la mise à jour du joueur, vérifiez si le joueur est en chute libre
        if (this.body.velocity.y > 0) {
            // Calculer la hauteur de chute en soustrayant la position Y précédente de la position Y actuelle
            let fallHeight = previousY - this.y;

            // Vérifier si la hauteur de chute dépasse la valeur de fallDamageHeight
            if (fallHeight > this.fallDamageHeight) {
                // Infliger des dégâts au joueur
                this.takeFallDamage();
            }
        }

        // Mettre à jour la position Y précédente avec la position Y actuelle pour la prochaine mise à jour
        previousY = this.y;
    }





}