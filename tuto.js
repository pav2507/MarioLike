export class tuto extends Phaser.Scene{
    constructor(){
        super("tuto");
    }


    preload(){
    this.load.image('background1', 'assets/backgroundarbre1.png');
    this.load.image('background2', 'assets/backgroundarbre2.png');
    this.load.image('background3', 'assets/backgroundmontain1.png');
    this.load.image('background4', 'assets/backgroundmontain2.png');
    this.load.image('background5', 'assets/background.png');
    this.load.image('tuto', 'assets/tuto.png');
    this.load.image('back', 'assets/back.png');


    }

    create(){
        //ici le code de la fonction create



        this.add.image(0, -0, 'background5');
        this.add.image(0, -50, 'background4');
        this.add.image(0, -130, 'background3');
        this.add.image(0, -50, 'background2');
        this.add.image(0, -50, 'background1');
        this.add.image(0, -50, 'brume').setDepth(6);
        this.add.image(300, 200, 'tuto').setDepth(10);


        var boutonback = this.add.sprite(550, 330, 'back').setInteractive().setDepth(10);

        boutonback.on('pointerup',this.scenemenu,this);

        
        
        

    }

    scenemenu(){
        this.scene.start("Menu")
    }

}