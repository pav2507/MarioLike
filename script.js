import { Scene01 as Scene01 } from "./Scene01.js";
import { Scene02 as Scene02 } from "./Scene02.js";
import { Menu as Menu } from "./menu.js";
import {credits as credits} from "./credits.js"

var config = {
	type: Phaser.WEBGL,
	width: 640,
	height: 360,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500},
			debug: true 
		}
	},
	scene: [ Menu, Scene01, Scene02,credits], 
	scale: {
        parent: 'game_viewport',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, 
    },
    pixelArt: true // bug de texture toujours present 
}


var game = new Phaser.Game(config);