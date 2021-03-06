var app = app || {};

var game = new Phaser.Game(400, 560, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, true);

function preload() {

    game.load.atlasXML('seacreatures', 'assets/seacreatures.png', 'assets/seacreatures.xml');
    game.load.image('sky', 'assets/sky3.png');
    game.load.image('ground', 'assets/platform3.png');
    game.load.image('ground2', 'assets/platform4.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dudecopy23.png', 32, 48);
    game.load.spritesheet('linkright', 'assets/linkright.png', 50, 52);
    game.load.spritesheet('linkleft', 'assets/linkleft.png', 50, 52);
    game.load.spritesheet('rupee', 'assets/rupees.png', 36, 35);



}


var jellyfish;
var crab;
var greenJellyfish;
var octopus;
var purpleFish;
var seahorse;
var squid;
var stingray;
var flyingfish;
var player;
var platforms;
var cursors;
var seacreaturescreate;
var seacreaturesg = [];

var stars;
var score = 0;
var scoreText;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    // game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 3, 'ground2');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(210, 450, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-205, 330, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(210, 200, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-205, 70, 'ground');
    ledge.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    // Seacreatures



    //  Here we'll create 12 of them evenly spaced apart
   
    var addSeacreature = function(name, xOffset, yOffset, i){

        seacreatures = game.add.sprite((i * 80) + xOffset, yOffset, 'seacreatures');
        game.physics.arcade.enable(seacreatures);

        switch(name){
            case 'crab1':
                seacreatures.animations.add('swim', Phaser.Animation.generateFrameNames(name, 0, 25, '', 4), 30, true);
                seacreatures.body.setSize(20, 85, 0, 0);
                
                break;
            case 'blueJellyfish':
                seacreatures.animations.add('swim', Phaser.Animation.generateFrameNames(name, 0, 32, '', 4), 30, true);
                break;
            case 'octopus':
                seacreatures.animations.add('swim', Phaser.Animation.generateFrameNames(name, 0, 24, '', 4), 30, true);
                seacreatures.body.setSize(20, 95, 0, 0);
                break;
            case 'purpleFish':
                seacreatures.animations.add('swim', Phaser.Animation.generateFrameNames('purpleFish', 0, 20, '', 4), 30, true);
                break;
        }

        
        seacreatures.enableBody = true;
        seacreatures.body.collideWorldBounds = true;
        seacreatures.scale.setTo(.3, .3);
        seacreatures.body.bounce.y = 0.7 + Math.random() * 0.2;
        seacreatures.body.gravity.y = 300;
        seacreatures.animations.play('swim');
        game.physics.arcade.collide(seacreatures, platforms);
        seacreaturesg.push(seacreatures);


    };






    for (var i = 0; i < 6; i++) {

        if (i === 1){

            addSeacreature('crab1', -10, 0, i);
            addSeacreature('crab1', -10, 100, i);
            addSeacreature('crab1', 210, 250, i);
            addSeacreature('crab1', -10, 370, i);
            addSeacreature('purpleFish', 205, 490, i);

        } else if ( i === 2) {
            
            addSeacreature('blueJellyfish', 0, 0, i);
            addSeacreature('purpleFish', 0, 100, i);
            addSeacreature('blueJellyfish', 210, 250, i);
            addSeacreature('octopus', -10, 370, i);
            addSeacreature('blueJellyfish', 215, 490, i);

        } else if ( i === 3) {
           
            addSeacreature('octopus', -20, 0, i);

        } else if ( i === 4) {
           
            addSeacreature('purpleFish', -40, 0, i);

        } else if ( i === 5) {

            addSeacreature('crab1', -50, 0, i);

        } else {

            addSeacreature('octopus', -240, 0, i);
            addSeacreature('blueJellyfish', 0, 100, i);
            addSeacreature('octopus', 215, 250, i);
            addSeacreature('blueJellyfish', -10, 370, i);
            addSeacreature('blueJellyfish', 215, 490, i);

        }
    };


    //  The score
    // scoreText = game.add.text(16, 570, 'score: 0', { fontSize: '24px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    
    
}

function update() {


    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(seacreaturesg, platforms);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap(player, seacreaturesg, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

    contact();


}

function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 1;
    if (score === 18){
        shark();
    }
    // scoreText.text = 'Score: ' + score;

}

function endScore () {
    
    //Animation here
    //Restart here

}
