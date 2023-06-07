export class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    preload(){
        //ici le code de la fonction preload
        this.load.image('background01', 'assets/backgroundarbre1.png');
        this.load.image('background02', 'assets/backgroundarbre2.png');
        this.load.image('background03', 'assets/backgroundmontain1.png');
        this.load.image('background04', 'assets/backgroundmontain2.png');
        this.load.image('parchemin', 'assets/parchemin.png');
        this.load.image('background05', 'assets/background.png');
        this.load.image('brume', 'assets/effetbrume.png');
        this.load.image('logo1', 'assets/logo1.png');
        this.load.spritesheet('logo', 'assets/logo.png',{ frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('play', 'assets/boutonplay.png',{ frameWidth: 100, frameHeight: 50 });
        this.load.spritesheet('option', 'assets/option.png',{ frameWidth: 100, frameHeight: 50 }); 
        this.load.spritesheet('quit', 'assets/quit.png',{ frameWidth: 100, frameHeight: 50 }); 
        this.load.audio('musique', 'assets/musique.mp3');
    }

    create(){
        //ici le code de la fonction create

        this.musique = this.sound.add('musique', { loop: true });
        this.musique.play();



        this.add.image(0, -0, 'background05');
        this.add.image(0, -50, 'background04');
        this.add.image(0, -130, 'background03');
        this.add.image(0, -50, 'background02');
        this.add.image(0, -50, 'background01');
        //this.add.image(300, 295, 'parchemin').setDepth(7);
        this.add.image(0, -50, 'brume').setDepth(6);

        this.add.image(300, 150, 'logo1').setDepth(6);



        var boutonOption = this.add.sprite(185, 286, 'option').setInteractive().setDepth(7);
        var boutonPlay = this.add.sprite(297, 286, 'play').setInteractive().setDepth(7);
        var boutonQuit = this.add.sprite(410, 286, 'quit').setInteractive().setDepth(7);
       
        

        boutonPlay.on('pointerup',this.sceneScene01,this);
        boutonOption.on('pointerup',this.scenecredits,this);
        boutonQuit.on('pointerup',this.scenetuto,this);


        // Ajoute l'animation au bouton play
        this.anims.create({
            key: 'play_animation',
            frames: this.anims.generateFrameNumbers('play', { start: 0, end: 2}),
            frameRate: 3,
            repeat: -1
        }
        );
        // Joue l'animation du bouton play
        boutonPlay.anims.play('play_animation');


        // Ajoute l'animation au bouton play
        this.anims.create({
            key: 'quit_animation',
            frames: this.anims.generateFrameNumbers('quit', { start: 0, end: 2}),
            frameRate: 3,
            repeat: -1
        }
        );
        // Joue l'animation du bouton play
        boutonQuit.anims.play('quit_animation');


        
        // Ajoute l'animation au bouton play
        this.anims.create({
            key: 'option_animation',
            frames: this.anims.generateFrameNumbers('option', { start: 0, end: 2}),
            frameRate: 3,
            repeat: -1
        }
        );
        // Joue l'animation du bouton play
        boutonOption.anims.play('option_animation');

        
    
    
 
    

    }


    

    update(){
        //ici le code de la fonction update
    }

    sceneScene01(){
        this.scene.start("Scene01")
    }

    scenecredits(){
        this.scene.start("credits")
    }

    scenetuto(){
        this.scene.start("tuto")
    }

};