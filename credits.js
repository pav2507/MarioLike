export class credits extends Phaser.Scene{
    constructor(){
        super("credits");
    }


    preload(){
    this.load.image('background1', 'assets/backgroundarbre1.png');
    this.load.image('background2', 'assets/backgroundarbre2.png');
    this.load.image('background3', 'assets/backgroundmontain1.png');
    this.load.image('background4', 'assets/backgroundmontain2.png');
    this.load.image('background5', 'assets/background.png');
    this.load.image('brume', 'assets/effetbrume.png');

    }

    create(){
        //ici le code de la fonction create



        this.add.image(0, -0, 'background5');
        this.add.image(0, -50, 'background4');
        this.add.image(0, -130, 'background3');
        this.add.image(0, -50, 'background2');
        this.add.image(0, -50, 'background1');
        this.add.image(0, -50, 'brume').setDepth(6);

        // Ajouter un texte
        var texteCredits = this.add.text(300, 40, 'Crédits', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff'
        });
        texteCredits.setOrigin(0.5);

        var texteCredits = this.add.text(310, 340, 'Merci à Alan, JD et Marin pour leur aide ', {
            fontFamily: 'Arial',
            fontSize: '16',
            color: '#ffffff'
        });
        texteCredits.setOrigin(0.5);
        
        

    }

}