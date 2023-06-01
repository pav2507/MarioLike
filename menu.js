export class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    preload(){
        //ici le code de la fonction preload
        this.load.image('menu', 'assets/backgroundmenu.png');
        this.load.spritesheet('play', 'assets/boutonplay.png',{ frameWidth: 100, frameHeight: 50 });
        this.load.spritesheet('option', 'assets/option.png',{ frameWidth: 100, frameHeight: 50 }); 
        this.load.spritesheet('quit', 'assets/quit.png',{ frameWidth: 100, frameHeight: 50 }); 
    }

    create(){
        //ici le code de la fonction create
        this.add.image(0, 0, 'menu');
        var boutonOption = this.add.sprite(150, 300, 'option').setInteractive();
        var boutonPlay = this.add.sprite(300, 300, 'play').setInteractive();
        var boutonQuit = this.add.sprite(450, 300, 'quit').setInteractive();

        boutonPlay.on('pointerup',this.sceneScene01,this);
        boutonOption.on('pointerup',this.sceneScene01,this);
        boutonQuit.on('pointerup',this.sceneScene01,this);


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

};