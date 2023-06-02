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
        this.load.image('background05', 'assets/background.png');
        this.load.image('brume', 'assets/effetbrume.png');
        this.load.spritesheet('logo', 'assets/logo.png',{ frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('play', 'assets/boutonplay.png',{ frameWidth: 100, frameHeight: 50 });
        this.load.spritesheet('option', 'assets/option.png',{ frameWidth: 100, frameHeight: 50 }); 
        this.load.spritesheet('quit', 'assets/quit.png',{ frameWidth: 100, frameHeight: 50 }); 
    }

    create(){
        //ici le code de la fonction create



        this.add.image(0, -0, 'background05');
        this.add.image(0, -50, 'background04');
        this.add.image(0, -130, 'background03');
        this.add.image(0, -50, 'background02');
        this.add.image(0, -50, 'background01');
        this.add.image(0, -50, 'brume').setDepth(6);



        var boutonOption = this.add.sprite(150, 300, 'option').setInteractive();
        var boutonPlay = this.add.sprite(300, 300, 'play').setInteractive();
        var boutonQuit = this.add.sprite(450, 300, 'quit').setInteractive();
        var boutonlogo = this.add.sprite(300, 150, 'logo').setInteractive();
        

        boutonPlay.on('pointerup',this.sceneScene01,this);
        boutonOption.on('pointerup',this.scenecredits,this);
        boutonQuit.on('pointerup', () => {
            var confirmation = confirm("Êtes-vous sûr de vouloir quitter le jeu ?");
        
            if (confirmation) {
                // Affichage d'un message ou d'une animation de sortie si nécessaire
                // ...
        
                // Demande à l'utilisateur de fermer manuellement l'onglet ou la fenêtre
                window.close();
            }
        });


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

        this.anims.create({
            key: 'logoanim',
            frames: this.anims.generateFrameNumbers('logo', { start: 0, end: 2}),
            frameRate: 10,
            repeat: -1
        }
        );
        // Joue l'animation du bouton play
        boutonlogo.anims.play('logoanim');

    
    
 
    

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

};