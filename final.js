export class final extends Phaser.Scene{
    constructor(){
        super("final");
    }

    preload(){
        //ici le code de la fonction preload
        this.load.image('background01', 'assets/backgroundarbre1.png');
        this.load.image('background02', 'assets/backgroundarbre2.png');
        this.load.image('background03', 'assets/backgroundmontain1.png');
        this.load.image('background04', 'assets/backgroundmontain2.png');
        this.load.image('background05', 'assets/background.png');
        this.load.image('brume', 'assets/effetbrume.png');
        this.load.image('back', 'assets/back.png');
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
        this.add.image(0, -50, 'brume').setDepth(6);

        
        var boutonback = this.add.sprite(550, 330, 'back').setInteractive().setDepth(10);

        boutonback.on('pointerup',this.scenemenu,this);

        
        

    

    }

    
    scenemenu(){
        this.scene.start("Menu")
    }



    

    update(){
        //ici le code de la fonction update
    }
};