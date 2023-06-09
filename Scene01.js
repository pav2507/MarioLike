

import { Ennemycac } from "./Ennemy1.js";
import { Ennemydist } from "./Ennemy2.js";
import { Ally } from "./Ally.js";
import { Player } from "./Player.js";
import { Collectible } from "./Collectible.js";
import { eau } from "./eau.js";
import { prof } from "./prof.js";
import { boss} from "./boss.js"


var score;
var nombre = 0;
var scorecollec;
var nombrecollec = 0;

let tempsEcoule = 0;

export class Scene01 extends Phaser.Scene {

    constructor() {
        super("Scene01");
        this.emitter = null; // Déclaration de la variable membre emitter


    }

////////////////////////////////chargement /////////////////////////////////////////////////////

    preload() {

        //spriteshett
        this.load.spritesheet('perso', 'assets/perso.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('collec', "assets/collec.png", { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('ennemi1', "assets/ennemi1.png", { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('ennemi2', "assets/ennemi2.png", { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('allie1', "assets/allie1.png", { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('eau', "assets/eau.png", { frameWidth: 300, frameHeight: 160 });
        this.load.spritesheet('prof', "assets/prof.png", { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('boss', "assets/boss.png", { frameWidth: 32, frameHeight: 48 });

        //map
        this.load.tilemapTiledJSON('map', "assets/tuile_de_jeu.json");
        this.load.image("tileset", "assets/tilesettest.png");
        this.load.image('background0', 'assets/backgroundarbre1.png');
        this.load.image('background00', 'assets/backgroundarbre2.png');
        this.load.image('background1', 'assets/backgroundmontain1.png');
        this.load.image('background2', 'assets/backgroundmontain2.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('brume', 'assets/effetbrume.png');
        
        
        //ui
        this.load.image('uiallysave', 'assets/uiallysave.png');
        this.load.image('uishuriken', 'assets/uishuriken.png');
        this.load.image('vie1', 'assets/vie1.png');
        this.load.image('vie2', 'assets/vie2.png');
        this.load.image('vie3', 'assets/vie3.png');
        
        this.load.image("shuriken", "assets/shuriken.png");
        
        this.load.image('particule', 'assets/particule.png');
        this.load.image('menu', 'asset/backgroundmenu.png');
        this.load.image('play', 'asset/play.png');
        this.load.image('option', 'asset/option.png'); 
        this.load.image('quit', 'asset/quitter.png'); 

        //musique 
        this.load.audio('musique', 'assets/musique.mp3');


    }







    create() {

        //#region //////////////////////////////// map /////////////////////////////////////////////////////

        this.musique = this.sound.add('musique', { loop: true });
        this.musique.play();

        this.add.image(1750, 800, 'background').setScrollFactor(0.6).setDepth(-11);
        this.add.image(1750, 550, 'background2').setScrollFactor(0.6).setDepth(-10);
        this.add.image(1750, 600, 'background1').setScrollFactor(0.7).setDepth(-9);
        this.add.image(1750, 750, 'background00').setScrollFactor(0.8).setDepth(-8);
        this.add.image(1750, 800, 'background0').setScrollFactor(0.85).setDepth(-7);
        this.add.image(1750, 750, 'brume').setScrollFactor(0.85).setDepth(-6);
        this.add.image(1750, 750, 'brume').setScrollFactor(0.85).setDepth(-9);
        this.add.image(1750, 850, 'brume').setScrollFactor(0.85).setDepth(  500);

        this.tempsTexte = this.add.text(300, 10, 'Temps : 0', { font: '16px Arial', fill: '#ffffff' });

        this.tempsEvent = this.time.addEvent({
          delay: 1000, // temps en millisecondes entre chaque déclenchement de l'événement
          callback: this.mettreAJourChronometre,
          callbackScope: this,
          loop: true
        });
      
        
        
    
        


        this.cameras.main.setBounds(0, 0, 7360, 1600);

        const map = this.add.tilemap("map");// ajout map 
        const tiles = map.addTilesetImage("tilesettest", "tileset");// ajout collision

        const calquepoteau = map.createLayer("calquepoteau", tiles).setDepth(160);
        const calque_decor2 = map.createLayer("calquedecor2", tiles);
        const calque_decor = map.createLayer("calquedecor", tiles).setDepth(150);
        
        
        const calque_tuile = map.createLayer("calquetuile", tiles).setDepth(150);


       
        calque_tuile.setCollisionByProperty({ estSolide: true });
        
        
        
       
     


        

        
        
        
        this.eau1 = new eau(this, 64,1430).setDepth(110);
        this.eau2 = new eau(this, 400,1430).setDepth(110);
        this.eau3 = new eau(this, 576,1430).setDepth(110);
        this.eau4 = new eau(this, 732,1430).setDepth(110);
        this.eau5 = new eau(this, 900,1430).setDepth(110);
        this.eau6 = new eau(this, 1200,1430).setDepth(110);
        this.eau7 = new eau(this, 1550,1430).setDepth(110);
        this.eau8 = new eau(this, 1800,1430).setDepth(110);
        this.eau9 = new eau(this, 2200,1430).setDepth(110);
        this.eau10 = new eau(this, 2500,1430).setDepth(110);
        this.eau11 = new eau(this, 2800,1430).setDepth(110);
        this.eau12 = new eau(this, 3100,1430).setDepth(110);
        this.eau13 = new eau(this, 3270,1430).setDepth(110);
        this.eau14 = new eau(this, 3720,1430).setDepth(110);
        this.eau15 = new eau(this, 4000,1430).setDepth(110);
        this.eau16 = new eau(this, 4300,1430).setDepth(110);
        this.eau17 = new eau(this, 4600,1430).setDepth(110);
        this.eau18 = new eau(this, 4900,1430).setDepth(110);
        this.eau19 = new eau(this, 4920,1430).setDepth(110);
        





        //#endregion


        //////////////////////////////// player /////////////////////////////////////////////////////
        //#region
        this.player = new Player(this, 30, 1300).setDepth(100);
        this.physics.add.collider(this.player, calque_tuile, () => {
            // ptet on va trouver comment faire des dégats de chute ici
        });
        this.physics.add.collider(this.player, this.ennemydistGroup, this.handleCollision, null, this);
        
        


        // espace = lancé de projectile 
        this.input.keyboard.on('keydown-SPACE', this.fireProjectile, this);

//#endregion

        ////////////////////////////////deplacement + animation  /////////////////////////////////////////////////////

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'perso', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('perso', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('perso', { start: 9, end: 11 }),
            frameRate: 4,
            repeat: 0
        });

        this.anims.create({
            key: '2up',
            frames: this.anims.generateFrameNumbers('perso', { start: 12, end: 16 }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'death',
            frames: this.anims.generateFrameNumbers('perso', { start: 17, end: 19 }, (true)),
            frameRate: 10,
            repeat: 0 // 0 signifie que l'animation ne se répète pas
        });



        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.startFollow(this.player);
        this.previousY = this.player.y;


        



        ////////////////////////////////ennemis /////////////////////////////////////////////////////

        this.groupeEnnemis = this.add.group();
        this.ennemi1 = new Ennemycac(this, 375, 1300, 400, 415).setSize(32, 48);
        this.ennemi2 = new Ennemycac(this, 1100, 1248, 200, 700);
        this.ennemi3 = new Ennemydist(this, 1585, 1102)
        this.ennemi4 = new Ennemycac(this, 2100, 1248, 400, 700);
        this.ennemi5 = new Ennemycac(this, 2368, 1280, 400, 700);
        this.ennemi6 = new Ennemydist(this, 2510, 1280);
        this.ennemi7 = new Ennemycac(this, 2880, 1280, 400, 700);
        this.ennemi8 = new Ennemydist(this, 3328, 1088);
        this.ennemi9 = new Ennemycac(this, 3780, 1216, 400, 700);
        this.ennemi10 = new Ennemydist(this, 4210, 1280);
        this.ennemi11 = new Ennemydist(this, 4266, 1248);
        this.ennemi12 = new Ennemydist(this, 4335, 1216);
        this.ennemi13= new Ennemycac(this, 5184, 1280, 1248, 700);
        this.ennemi14 = new Ennemydist(this, 4800, 1248);
        this.ennemi15= new Ennemycac(this, 170*32, 40*32, 1248, 700);
        this.ennemi16= new Ennemycac(this, 182*32, 40*32, 1248, 700);
        this.ennemi17 = new Ennemydist(this, 202*32, 1248);
        this.ennemi18= new Ennemycac(this, 194*32, 34*32, 1248, 700);
        this.ennemi19 = new Ennemydist(this, 179*32, 34*32);
        this.ennemi20 = new Ennemycac(this, 183*32, 28*32, 1248, 700);
        this.ennemi21 = new Ennemydist(this, 200*32, 28*32);
        this.ennemi22 = new Ennemydist(this, 196*32, 22 *32);
        this.ennemi23 = new Ennemycac(this, 170*32, 46*32, 1248, 700);

        this.boss1 = new boss(this, 194*32, 16*32, 1248, 700);
        this.boss2 = new boss(this, 194*32, 16*32, 1248, 700);
        this.boss3 = new boss(this, 194*32, 16*32, 1248, 700);
        this.boss4 = new boss(this, 194*32, 16*32, 1248, 700);
        this.boss5 = new boss(this, 194*32, 16*32, 1248, 700);

        



        this.groupeEnnemis.add(this.ennemi1);
        this.groupeEnnemis.add(this.ennemi2);
        this.groupeEnnemis.add(this.ennemi3);
        this.groupeEnnemis.add(this.ennemi4);
        this.groupeEnnemis.add(this.ennemi5);
        this.groupeEnnemis.add(this.ennemi6);
        this.groupeEnnemis.add(this.ennemi7);
        this.groupeEnnemis.add(this.ennemi8);
        this.groupeEnnemis.add(this.ennemi9);
        this.groupeEnnemis.add(this.ennemi10);
        this.groupeEnnemis.add(this.ennemi11);
        this.groupeEnnemis.add(this.ennemi12);
        this.groupeEnnemis.add(this.ennemi13);
        this.groupeEnnemis.add(this.ennemi14);
        this.groupeEnnemis.add(this.ennemi15);
        this.groupeEnnemis.add(this.ennemi16);
        this.groupeEnnemis.add(this.ennemi17);
        this.groupeEnnemis.add(this.ennemi18);
        this.groupeEnnemis.add(this.ennemi19);
        this.groupeEnnemis.add(this.ennemi20);
        this.groupeEnnemis.add(this.ennemi21);
        this.groupeEnnemis.add(this.ennemi22);
        this.groupeEnnemis.add(this.ennemi23);
        
        this.groupeEnnemis.add(this.boss1);
        this.groupeEnnemis.add(this.boss2);
        this.groupeEnnemis.add(this.boss3);
        this.groupeEnnemis.add(this.boss4);
        this.groupeEnnemis.add(this.boss5);


        this.ennemydistGroup = this.physics.add.group({ colliderWorldBounds: false });
        this.physics.add.collider(this.ennemydistGroup, calque_tuile);

        this.ennemycacGroup = this.physics.add.group({ colliderWorldBounds: false });
        this.physics.add.collider(this.ennemycacGroup, calque_tuile);


        this.ennemycacGroup.add(this.ennemi1);
        this.ennemycacGroup.add(this.ennemi2);
        this.ennemycacGroup.add(this.ennemi4);
        this.ennemycacGroup.add(this.ennemi5);
        this.ennemycacGroup.add(this.ennemi7);
        this.ennemycacGroup.add(this.ennemi9);
        this.ennemycacGroup.add(this.ennemi13);
        this.ennemycacGroup.add(this.ennemi15);
        this.ennemycacGroup.add(this.ennemi16);
        this.ennemycacGroup.add(this.ennemi18);
        this.ennemycacGroup.add(this.ennemi20);
        this.ennemycacGroup.add(this.ennemi23);


        this.ennemydistGroup.add(this.ennemi3);
        this.ennemydistGroup.add(this.ennemi6);
        this.ennemydistGroup.add(this.ennemi8);
        this.ennemydistGroup.add(this.ennemi10);
        this.ennemydistGroup.add(this.ennemi11);
        this.ennemydistGroup.add(this.ennemi12);
        this.ennemydistGroup.add(this.ennemi14);
        this.ennemydistGroup.add(this.ennemi17);
        this.ennemydistGroup.add(this.ennemi19);
        this.ennemydistGroup.add(this.ennemi21);
        this.ennemydistGroup.add(this.ennemi22);
        this.ennemydistGroup.add(this.boss1);
        this.ennemydistGroup.add(this.boss2);
        this.ennemydistGroup.add(this.boss3);
        this.ennemydistGroup.add(this.boss4);
        this.ennemydistGroup.add(this.boss5);

        this.physics.add.collider(this.player, this.ennemycacGroup, () => {
            this.player.takeDamage(1);
            this.player.invincible = true;
            this.player.setTint(0xFF0000);
            setTimeout(() => {
                this.player.invincible = false;
                this.player.setTint(0xFFFFFF);
            }, 1000);
        }, () => {
            return !this.player.invincible;
        });

        this.physics.add.collider(this.player, this.ennemydistGroup, () => {
            this.player.takeDamage(1);
            this.player.invincible = true;
            this.player.setTint(0xFF0000);
            setTimeout(() => {
                this.player.invincible = false;
                this.player.setTint(0xFFFFFF);
            }, 1000);
        }, () => {
            return !this.player.invincible;
        });

        //////////////////////////////// allié /////////////////////////////////////////////////////

        this.ally1 = new Ally(this, 500, 1312);
        this.ally2 = new Ally(this, 1680, 1184);
        this.ally3 = new Ally(this, 1250, 1248);
        this.ally4 = new Ally(this, 2016, 1280);
        this.ally5 = new Ally(this, 2465, 1280);
        this.ally6 = new Ally(this, 2976, 1280);
        this.ally7 = new Ally(this, 3488, 1280);
        this.ally8 = new Ally(this, 4000, 1280);
        this.ally9 = new Ally(this, 4480, 1280);
        this.ally10 = new Ally(this, 5216, 1088);
        this.ally11 = new Ally(this, 198*32, 39*32);
        this.ally12 = new Ally(this, 193*32, 46*32);
        this.ally13 = new Ally(this, 171*32, 28*32);
        this.ally14 = new Ally(this, 184*32, 22*32);

        this.prof = new prof(this, 200*32, 14*32);

        this.physics.add.collider(this.ally1.visionBox, this.player, this.handleCollisionWithAlly1, null, this);
        this.physics.add.collider(this.ally2.visionBox, this.player, this.handleCollisionWithAlly2, null, this);
        this.physics.add.collider(this.ally3.visionBox, this.player, this.handleCollisionWithAlly3, null, this);
        this.physics.add.collider(this.ally4.visionBox, this.player, this.handleCollisionWithAlly4, null, this);
        this.physics.add.collider(this.ally5.visionBox, this.player, this.handleCollisionWithAlly5, null, this);
        this.physics.add.collider(this.ally6.visionBox, this.player, this.handleCollisionWithAlly6, null, this);
        this.physics.add.collider(this.ally7.visionBox, this.player, this.handleCollisionWithAlly7, null, this);
        this.physics.add.collider(this.ally8.visionBox, this.player, this.handleCollisionWithAlly8, null, this);
        this.physics.add.collider(this.ally9.visionBox, this.player, this.handleCollisionWithAlly9, null, this);
        this.physics.add.collider(this.ally10.visionBox, this.player, this.handleCollisionWithAlly10, null, this);
        this.physics.add.collider(this.ally11.visionBox, this.player, this.handleCollisionWithAlly11, null, this);
        this.physics.add.collider(this.ally12.visionBox, this.player, this.handleCollisionWithAlly12, null, this);
        this.physics.add.collider(this.ally13.visionBox, this.player, this.handleCollisionWithAlly13, null, this);
        this.physics.add.collider(this.ally14.visionBox, this.player, this.handleCollisionWithAlly14, null, this);

        this.physics.add.collider(this.prof.visionBox, this.player, this.handleCollisionWithprof, null, this);

        this.physics.add.collider(this.ally1, calque_tuile);
        this.physics.add.collider(this.ally2, calque_tuile);
        this.physics.add.collider(this.ally3, calque_tuile);
        this.physics.add.collider(this.ally4, calque_tuile);
        this.physics.add.collider(this.ally5, calque_tuile);
        this.physics.add.collider(this.ally6, calque_tuile);
        this.physics.add.collider(this.ally7, calque_tuile);
        this.physics.add.collider(this.ally8, calque_tuile);
        this.physics.add.collider(this.ally9, calque_tuile);
        this.physics.add.collider(this.ally10, calque_tuile);
        this.physics.add.collider(this.ally11, calque_tuile);
        this.physics.add.collider(this.ally12, calque_tuile);
        this.physics.add.collider(this.ally13, calque_tuile);
        this.physics.add.collider(this.ally14, calque_tuile);
        this.physics.add.collider(this.prof, calque_tuile);

        //////////////////////////////// collectible  /////////////////////////////////////////////////////

        this.collec1 = new Collectible(this, 100, 1312).setDepth(150);
        this.collec2 = new Collectible(this, 210, 1312).setDepth(150);
        this.collec3 = new Collectible(this, 210, 1216).setDepth(150);
        this.collec4 = new Collectible(this, 15.5*32, 38*32).setDepth(150);
        this.collec5 = new Collectible(this, 28.5*32, 37*32).setDepth(150);
        this.collec6 = new Collectible(this, 59.5*32, 37*32).setDepth(150);
        this.collec7 = new Collectible(this, 62.5*32, 46*32).setDepth(150);
        this.collec8 = new Collectible(this, 73*32, 36*32).setDepth(150);
        this.collec9 = new Collectible(this, 93*32, 36*32).setDepth(150);
        this.collec10 = new Collectible(this, 109*32, 46*32).setDepth(150);
        this.collec11 = new Collectible(this, 137*32, 34*32).setDepth(150);
        this.collec12 = new Collectible(this, 158*32, 35*32).setDepth(150);
        this.collec13 = new Collectible(this, 200*32, 46*32).setDepth(150);
        this.collec14 = new Collectible(this, 171*32, 31*32).setDepth(150);
        this.collec15 = new Collectible(this, 168*32, 25*32).setDepth(150);
        this.collec16 = new Collectible(this, 168*32, 25*32).setDepth(150);
        this.collec17 = new Collectible(this, 168*32, 25*32).setDepth(150);
        this.collec18 = new Collectible(this, 168*32, 25*32).setDepth(150);


        this.physics.add.collider(this.collec1.visionBox, this.player, this.handleCollisionWithcollec1, null, this);
        this.physics.add.collider(this.collec2.visionBox, this.player, this.handleCollisionWithcollec2, null, this);
        this.physics.add.collider(this.collec3.visionBox, this.player, this.handleCollisionWithcollec3, null, this);
        this.physics.add.collider(this.collec4.visionBox, this.player, this.handleCollisionWithcollec4, null, this);
        this.physics.add.collider(this.collec5.visionBox, this.player, this.handleCollisionWithcollec5, null, this);
        this.physics.add.collider(this.collec6.visionBox, this.player, this.handleCollisionWithcollec6, null, this);
        this.physics.add.collider(this.collec7.visionBox, this.player, this.handleCollisionWithcollec7, null, this);
        this.physics.add.collider(this.collec8.visionBox, this.player, this.handleCollisionWithcollec8, null, this);
        this.physics.add.collider(this.collec9.visionBox, this.player, this.handleCollisionWithcollec9, null, this);
        this.physics.add.collider(this.collec10.visionBox, this.player, this.handleCollisionWithcollec10, null, this);
        this.physics.add.collider(this.collec11.visionBox, this.player, this.handleCollisionWithcollec11, null, this);
        this.physics.add.collider(this.collec12.visionBox, this.player, this.handleCollisionWithcollec12, null, this);
        this.physics.add.collider(this.collec13.visionBox, this.player, this.handleCollisionWithcollec13, null, this);
        this.physics.add.collider(this.collec14.visionBox, this.player, this.handleCollisionWithcollec14, null, this);
        this.physics.add.collider(this.collec15.visionBox, this.player, this.handleCollisionWithcollec15, null, this);
        this.physics.add.collider(this.collec16.visionBox, this.player, this.handleCollisionWithcollec16, null, this);
        this.physics.add.collider(this.collec17.visionBox, this.player, this.handleCollisionWithcollec17, null, this);
        this.physics.add.collider(this.collec18.visionBox, this.player, this.handleCollisionWithcollec18, null, this);
        
     


        this.physics.add.collider(this.collec1, calque_tuile);
        this.physics.add.collider(this.collec2, calque_tuile);
        this.physics.add.collider(this.collec3, calque_tuile);
        this.physics.add.collider(this.collec4, calque_tuile);
        this.physics.add.collider(this.collec5, calque_tuile);
        this.physics.add.collider(this.collec6, calque_tuile);
        this.physics.add.collider(this.collec7, calque_tuile);
        this.physics.add.collider(this.collec8, calque_tuile);
        this.physics.add.collider(this.collec9, calque_tuile);
        this.physics.add.collider(this.collec10, calque_tuile);
        this.physics.add.collider(this.collec11, calque_tuile);
        this.physics.add.collider(this.collec12, calque_tuile);
        this.physics.add.collider(this.collec13, calque_tuile);
        this.physics.add.collider(this.collec14, calque_tuile);
        this.physics.add.collider(this.collec15, calque_tuile);
        this.physics.add.collider(this.collec16, calque_tuile);
        this.physics.add.collider(this.collec17, calque_tuile);
        this.physics.add.collider(this.collec18, calque_tuile);
        


        
        ////////////////////////////////trainéee/////////////////////////////////////////////////////



        const particles = this.add.particles('particule').setDepth(1);
        this.emitter = particles.createEmitter({
            x: this.player.x,
            y: this.player.y,
            speed: { min: 0, max: 10 },
            angle: { min: 0, max: 360 },
            scale: { start: 1, end: 0 },
            lifespan: 300,
            blendMode: 'ADD'
        });

        ////////////////////////////////score affcihé + UI /////////////////////////////////////////////////////


        score = this.add.text(50, 38, "0", { fontSize: '32px', fill: '#000000', fontFamily: 'Arial, sans-serif' }).setOrigin(0, 0).setScrollFactor(0).setDepth(1200);
        scorecollec = this.add.text(50, 78, "0", { fontSize: '32px', fill: '#000000', fontFamily: 'Arial, sans-serif' }).setOrigin(0, 0).setScrollFactor(0).setDepth(1200);
        this.add.image(10, 38, "uiallysave").setOrigin(0, 0).setScrollFactor(0).setDepth(250);
        this.add.image(10, 78, "uishuriken").setOrigin(0, 0).setScrollFactor(0).setDepth(250);
    }







    ////////////////////////////////focntion collision ally /////////////////////////////////////////////////////



    handleCollisionWithAlly1(visionBox, player) {
        // Faire disparaître l'allié
        this.ally1.setVisible(false);
        this.ally1.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly2(visionBox, player) {
        // Faire disparaître l'allié
        this.ally2.setVisible(false);
        this.ally2.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly3(visionBox, player) {
        // Faire disparaître l'allié
        this.ally3.setVisible(false);
        this.ally3.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly4(visionBox, player) {
        // Faire disparaître l'allié
        this.ally4.setVisible(false);
        this.ally4.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly5(visionBox, player) {
        // Faire disparaître l'allié
        this.ally5.setVisible(false);
        this.ally5.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly6(visionBox, player) {
        // Faire disparaître l'allié
        this.ally6.setVisible(false);
        this.ally6.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly7(visionBox, player) {
        // Faire disparaître l'allié
        this.ally7.setVisible(false);
        this.ally7.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly8(visionBox, player) {
        // Faire disparaître l'allié
        this.ally8.setVisible(false);
        this.ally8.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly9(visionBox, player) {
        // Faire disparaître l'allié
        this.ally9.setVisible(false);
        this.ally9.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly10(visionBox, player) {
        // Faire disparaître l'allié
        this.ally10.setVisible(false);
        this.ally10.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly11(visionBox, player) {
        // Faire disparaître l'allié
        this.ally11.setVisible(false);
        this.ally11.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly12(visionBox, player) {
        // Faire disparaître l'allié
        this.ally12.setVisible(false);
        this.ally12.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly13(visionBox, player) {
        // Faire disparaître l'allié
        this.ally13.setVisible(false);
        this.ally13.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithAlly14(visionBox, player) {
        // Faire disparaître l'allié
        this.ally14.setVisible(false);
        this.ally14.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    handleCollisionWithprof(visionBox, player) {
        // Faire disparaître l'allié
        this.prof.setVisible(false);
        this.prof.setActive(false);


        // Supprimer la hitbox de l'allié
        visionBox.destroy();

        nombre = nombre + 1;
        score.setText(+ nombre);


    }

    //////////////////////////////// fonction collectible /////////////////////////////////////////////////////


    handleCollisionWithcollec1(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec1.setVisible(false);
        this.collec1.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec2(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec2.setVisible(false);
        this.collec2.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec3(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec3.setVisible(false);
        this.collec3.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec4(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec4.setVisible(false);
        this.collec4.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec5(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec5.setVisible(false);
        this.collec5.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec6(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec6.setVisible(false);
        this.collec6.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec7(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec7.setVisible(false);
        this.collec7.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec8(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec8.setVisible(false);
        this.collec8.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec8(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec8.setVisible(false);
        this.collec8.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec9(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec9.setVisible(false);
        this.collec9.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec10(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec10.setVisible(false);
        this.collec10.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec11(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec11.setVisible(false);
        this.collec11.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec12(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec12.setVisible(false);
        this.collec12.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    handleCollisionWithcollec13(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec13.setVisible(false);
        this.collec13.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec14(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec14.setVisible(false);
        this.collec14.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec15(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec15.setVisible(false);
        this.collec15.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec16(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec16.setVisible(false);
        this.collec16.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec17(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec17.setVisible(false);
        this.collec17.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }
    handleCollisionWithcollec18(visionBox, player) {
        // Faire disparaître le shuriken
        this.collec18.setVisible(false);
        this.collec18.setActive(false);


        // Supprimer la hitbox du shuriken
        visionBox.destroy();

        nombrecollec = nombrecollec + 1;
        scorecollec.setText(+ nombrecollec);


    }

    ////////////////////////////////fonction projectile /////////////////////////////////////////////////////

    fireProjectile() {
        if (nombrecollec > 0) {
            const velocityX = this.cursors.left.isDown ? -500 : 500; // Vérifie la touche gauche
    
            const projectile = this.physics.add.sprite(this.player.x, this.player.y, 'shuriken').setVelocityX(velocityX);
            projectile.setVelocityX(velocityX);
            this.physics.add.collider(projectile, this.groupeEnnemis, (projectile, ennemi) => {
                projectile.destroy();
                ennemi.destroy();
                
            });
    
        nombrecollec--;
        scorecollec.setText(+ nombrecollec);     // Décrémente le nombre de collectibles après avoir tiré le projectile
        }
    }


    destroy() {
        this.particles.destroy();
    }

    mettreAJourChronometre() {
        tempsEcoule += 1;
        this.tempsTexte.setText('Temps : ' + tempsEcoule);
    }


    update() {

        if (nombre == 15){

            this.scene.start("final")

        }

        if (this.player.body.blocked.down) this.hasDoubleJumped = false;

        if (this.cursors.left.isDown) { //si la touche gauche est appuyée
            this.player.setVelocityX(-100); //alors vitesse négative en X
            this.player.setFlipX(true);
            if (this.player.body.blocked.down) this.player.anims.play('right', true); //et animation => gauche
        }
        else if (this.cursors.right.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityX(100); //alors vitesse positive en X
            this.player.setFlipX(false);
            if (this.player.body.blocked.down) this.player.anims.play('right', true);
            //et animation => droite
        }
        else { // sinon
            this.player.setVelocityX(0); //vitesse nulle
            if (this.player.body.blocked.down) this.player.anims.play('turn'); //animation fait face caméra
        }


        if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
            if (this.player.body.blocked.down) {//saut normal
                //si touche haut appuyée ET que le perso touche le sol
                this.player.setVelocityY(-200); //alors vitesse verticale négative
                this.player.anims.play('up', true); //animation fait face caméra
                //(on saute)
            }
            else if (!this.hasDoubleJumped) {// double saut ( rajouter spritesheet de double saut)
                this.player.anims.play('2up', true); //animation fait face caméra
                this.player.setVelocityY(-200); //alors vitesse verticale négative
                this.hasDoubleJumped = true;
            }
        }


        if (this.cursors.up.isDown) {
            if (this.player.body.blocked.right) { // si la touche du haut est appuyée
                // et qu'il touhe un mur en allant vers la droite.

                this.player.setVelocityY(-200) // alors vitesse verticale négative 
            }
            if (this.player.body.blocked.left) { // si la touche du haut est appuyée 
                // et qu'il touche un mur en allant vers la gauche.
                this.player.setVelocityY(-200)


                if ((!this.hasDoubleJumped || this.player.body.velocity.y === 0)) {
                    this.player.setVelocityY(-200);
                    this.player.anims.play('2up', true); //animation fait face caméra

                }


            }

        }


        // Mettre à jour la position Y précédente du joueur
        this.previousY = this.player.y;

        // Utilisez this.emitter pour accéder à l'objet emitter dans la fonction update()
        this.emitter.setPosition(this.player.x, this.player.y);



    }
}    