class push extends Phaser.Scene {
    constructor() {
        super("shake");
    }

    preload() {
        this.load.setPath('./assets/');
        this.load.image('bunny', 'bunny2_ready.png');
        this.load.image('smallBunny', 'bunny.png');
    }

    create() {
        // create player character sprite with physics enabled
        // physics defined in main.js
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, 'bunny');
        this.player.setScale(0.5);
        this.player.setCollideWorldBounds(true);
        // set characters pushability to false so objects cannot push it
        this.player.setPushable(false);

        // create object for player to push with physics enabled
        this.pushable = this.physics.add.image(game.config.width / 4, game.config.height / 4, 'smallBunny');
        this.pushable.setCollideWorldBounds(true);
        
        // modify how much the object slides when pushed
        this.pushable.body.slideFactor.set(1, 1); // Change values to have object slide more when pushed
        
        // apply drag to object to simulate friction on moving object
        // does not matter if slideFactor on object is set to (0, 0)
        this.pushable.setDrag(1000);

        this.cursors = this.input.keyboard.createCursorKeys();

        // handles collision of player and object
        // if the player collides with the object, make the object pushable
        // and affected by the movement of the player, so long as they are
        // connected
        this.physics.add.collider(this.player, this.pushable, null, (player, obj2Push) => {
            obj2Push.setPushable(true);
        });

        document.getElementById('description').innerHTML = '<h2>push.js<br>Arrow keys to move</h2>'
    }

    update() {
        this.player.setVelocity(0, 0);

        if(this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
        } 
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
        }
    
        if (this.cursors.up.isDown){
            this.player.setVelocityY(-200);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(200);
        }
    }
}