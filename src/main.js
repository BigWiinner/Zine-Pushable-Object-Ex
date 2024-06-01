// Nathan Wiinikka
// Created: 5/30/2024
// Phaser: 3.70.0
//
// push
//
// A demonstration of pushable objects in phaser
// 
// Modified from "body push blocks" from Phaser API Documentation
// https://labs.phaser.io/view.html?src=src/physics\arcade\body%20push%20blocks.js 
// 
// Art assets from Kenny Assets "Jumper Pack" set:
// https://kenney.nl/assets/jumper-pack 

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true // false to no longer see collision boarders
        }
    },
    scene: [push]
}

const game = new Phaser.Game(config);