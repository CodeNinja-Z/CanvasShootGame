var MISSILERATE = 0.002;
var MOVELEFT = false;
var MOVERIGHT = false;
var FIREBUTTON = false;
var RESTART = false;
var LEVELDATA = { 
     1:  [[0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     3:  [[0,0,1,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     4:  [[0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,1,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],  
     5:  [[0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],  
     6:  [[1,0,1,0,1,0,1,0,1,0,1],
          [0,1,0,1,0,1,0,1,0,1,0],
          [1,0,1,0,1,0,1,0,1,0,1],
          [0,1,0,1,0,1,0,1,0,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [1,1,1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1],
          [0,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1,0]],  
     7:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [1,1,1,1,1,1,1,1,1,1,1],
          [0,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,0,1,1,1,1,0],
          [1,1,1,1,1,1,1,1,1,1,1],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]] };

function Game() {
	this.canvas = document.getElementById('canvas');
	this.context2D = this.canvas.getContext("2d");
	this.width = this.canvas.width;
	this.height = this.canvas.height;

	this.images = {};
	this.totalResources = 3;
	this.numResourcesLoaded = 0;
	this.fps = 60;
	this.totalFrames = 0;
	this.state = 'loading';
	
	this.loadImage("player");
	this.loadImage("invader");
	this.loadImage("background");
	this.interval = null;
};
	Game.prototype.initialize = function() {
		this.player = new Player(this.images['player']);
		this.gameover = new Gameover(this.images['background']);
		this.level = 1;
		this.levelReset();

		this.kubahSpeed = 0.5;

		this.state = 'playing';
		this.bindEvents();
		this.interval = setInterval(this.update, 1000 / this.fps);
	}

	Game.prototype.bindEvents = function() {
		$(document).keydown(function(e) {
		  	var keyCode = e.keyCode || e.which;
		  	switch (keyCode) {
			    case 37: 
			    	MOVELEFT = true;
			    	MOVERIGHT = false;
			    break;
			    case 39: 
			    	MOVERIGHT = true;
			    	MOVELEFT = false;
			    break;
			    case 32: 
			    	FIREBUTTON = true;
			    break;
				case 82: 
			    	RESTART = true;
				break;
		  	}
		});

		$(document).keyup(function(e) {
		  var keyCode = e.keyCode || e.which;
		  switch (keyCode) {
			    case 37: 
			    	MOVELEFT = false;
			    break;
			    case 39:
			    	MOVERIGHT = false;
			    break;
			    case 32:
			    	FIREBUTTON = false;
			    break;
				case 82:
			    	RESTART = false;
			    break;
		  	}
		});
	};

	Game.prototype.loadImage = function(name) {
		  this.images[name] = new Image();
		  this.images[name].onload = function() { 
		      game.resourceLoaded();
		  }
		  this.images[name].src = "images/" + name + ".png";
	}

	Game.prototype.resourceLoaded = function() {
		this.numResourcesLoaded += 1;
		if(this.numResourcesLoaded === this.totalResources) {
			this.initialize();
		}
	}

	Game.prototype.redraw = function() {
		this.canvas.width = this.canvas.width; 
		this.player.draw(this.context2D);
		for (var i = 0; i < this.enemies.length; i++) {
			if (game.enemies[i].dead) {
				continue;				
			}
			this.enemies[i].draw(this.context2D);
		};
		for (missile in this.missiles) {
			this.missiles[missile].draw(this.context2D);
		}
	}

	Game.prototype.update = function() {
		if (game.state === 'dead') {game.end()}
		if (game.state === 'playing') { game.play() }
		if (game.state === 'end') {
				if (RESTART) { 
					game.level = 1;
					game.levelReset();
					game.state = 'playing';
					this.player.reborn();
					game.update();
				}
		}
	}

	Game.prototype.end = function() {
		this.missiles = [];
		this.enemies = [];
		this.canvas.width = this.canvas.width; 		
		this.gameover.draw(this.context2D);
		this.state = 'end';
	}

	Game.prototype.play = function() {
		this.totalFrames++;
		this.player.update();
		if (MOVELEFT) { this.player.moveLeft() }
		if (MOVERIGHT) { this.player.moveRight(); }
		if (FIREBUTTON) { this.player.shoot(); }

		for (var i = 0; i < this.enemies.length; i++) {
			this.enemies[i].update();
		};

		for (var i = 0; i < this.missiles.length; i++) {
			missile = this.missiles[i];
			missile.update();
			if (missile.y > 640) {
				this.missiles.splice(i, 1);
			}

			for (var j = 0; j < this.player.missiles.length; j++) {
				if (missile.hit(this.player.missiles[j])) {
					this.missiles.splice(i, 1);		
					this.player.missiles.splice(j, 1);		
				}
			};
		};
		this.redraw();
	}

	Game.prototype.aliveEnemies = function() {
		var enemies = [];
		for (var i = 0; i < this.enemies.length; i++) {
			if (!this.enemies[i].dead) {
				enemies.push(this.enemies[i]);
			}
		};
		return enemies;
	}

	Game.prototype.nextLevel = function() {
		
		if(this.level < 7){
		this.level++;
		this.levelReset();
		}
	}

	Game.prototype.levelReset = function() {
		this.enemies = [];
		this.kubahSpeed = 0.5 + 0.1 * this.level;
		this.kubahDirection = 'right';
		MISSILERATE = 0.002 + 0.0001 * this.level;
		this.missiles = [];
		var level = LEVELDATA[this.level];
		for (var y=0,rows=level.length;y<rows;y++) {
			for (var x=0,cols=level[y].length;x<cols;x++) {
				if(level[y][x] != 0){
				this.enemies[this.enemies.length] = new kubah(this.images['invader'], 40 + x * 80 + 24, y * 40 + 40);
				}
			};			
		};
	}
game = new Game();

function Gameover(image) {
	this.image = image;
	this.height = this.image.height;
	this.width = this.image.width;

	this.y = game.canvas.height - this.height - 10;
	this.x = game.canvas.width / 2 - this.width / 2;

}
    Gameover.prototype.draw = function(context2D) {
	    context2D.drawImage(this.image, this.x, this.y);
    }

function Player(image) {
	this.image = image;

	this.height = this.image.height;
	this.width = this.image.width;
	this.y = game.canvas.height - this.height - 10;
	this.x = game.canvas.width / 2 - this.width / 2;

	this.lives = 3;
	this.missiles = [];
	this.speed = 5;
	this.fireRate = 200;
}
	Player.prototype.update = function() {
		for (var i = 0; i < this.missiles.length; i++) {
			this.missiles[i].update();
			if (this.missiles[i].y + this.missiles[i].height < 0) {
				game.player.missiles.splice(i, 1);
			}
		};
	}

	Player.prototype.draw = function(context2D) {
		context2D.drawImage(this.image, this.x, this.y);
		this.drawLives(context2D);

		context2D.fillStyle = "black";
		for (missile in this.missiles) {
			this.missiles[missile].draw(context2D);
		}
	}

	Player.prototype.drawLives = function(context2D) {
		for (var i = 0; i < this.lives; i++) {
			context2D.drawImage(this.image, 20  + i * (this.width / 2 + 10), 620, this.width / 2, this.height / 2);
		};
	}

	Player.prototype.moveLeft = function() {
		if (this.x - this.speed < 0)
		{this.x = game.canvas.width;
		}else{
		this.x = this.x - this.speed;
		}
	}

	Player.prototype.moveRight = function() {
		if (this.x + this.speed > game.canvas.width)
		{this.x = 0;
		}else{
		this.x = this.x + this.speed;
		}	}

	Player.prototype.shoot = function() {
		if (this.missiles.length < 1 || this.missiles[this.missiles.length - 1].y < this.y - this.height - this.fireRate) {
			this.missiles[this.missiles.length] = new PlayerMissile(this);
		}
	}

	Player.prototype.die = function() {
		this.lives--;
		game.missiles = [];
		this.missiles = [];

		if (this.lives <= 0) {
			game.state = 'dead';
			this.lives = 3;
		} else {
		}
	}

	
function PlayerMissile(player) {
	this.width = 5;
	this.height = 15;
	this.x = player.x + player.width / 2 - this.width / 3;
	this.y = player.y - this.height;

	this.speed = 5;

}
	PlayerMissile.prototype.update = function() {
		this.y -= this.speed;
		for (var i = 0; i < game.enemies.length; i++) {
			if (this.hit(game.enemies[i]) && !game.enemies[i].dead) {
				game.enemies[i].die();
				this.y = -1;
			}
		};
		
	}

	PlayerMissile.prototype.draw = function(context2D) {
	 	context2D.beginPath();
	    context2D.moveTo(this.x, this.y);
	    context2D.lineTo(this.x, this.y - this.height);
	    context2D.lineTo(this.x + this.width, this.y - this.height);
	    context2D.lineTo(this.x + this.width, this.y);
	    context2D.fillStyle = "white";
	    context2D.fill();
	}

	PlayerMissile.prototype.hit = function(kubah) {
		horizontal = (this.x < kubah.x && kubah.x < (this.x + this.width)) || 
								(this.x < kubah.x + kubah.width && kubah.x + kubah.width < this.x + this.width) ||
								(kubah.x < this.x && this.x + this.width < kubah.x + kubah.width)
		vertical = (this.y < kubah.y && kubah.y < this.y + this.height) || 
								(this.y < kubah.y + kubah.height && kubah.y + kubah.height < this.y + this.height) ||
								(kubah.y < this.y && this.y + this.height < kubah.y + kubah.height)

		return horizontal && vertical;
	}	

function kubah(image, x, y) {
	this.image = image;

	this.width = 26;
	this.height = 24;

	this.x = x + (80 - this.width) / 2;
	this.y = y;

	this.dead = false;
}

	kubah.prototype.draw = function(context2D) {
		context2D.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	kubah.prototype.update = function(context2D) {
		if (this.dead) { return }

		if (this.x + this.speed() < 40 || this.x + this.width + this.speed() > game.width - 40) {
			this.moveDown(true);
		}
		this.x += this.speed();
		if (Math.random() < MISSILERATE) { this.shoot(); }
	}

	kubah.prototype.moveDown = function(iterate) {
		this.y += this.height / 2;

		if (iterate === true) {
			game.kubahSpeed = -1 * game.kubahSpeed;
			if (game.kubahSpeed > 0) { Math.min(game.kubahSpeed += .5, 2); } else { Math.min(game.kubahSpeed -=.5, -2); }
			for (var i = 0; i < game.enemies.length; i++) {
				if (game.enemies[i] === this) { continue; }
				game.enemies[i].moveDown();
			};
		}
		if (this.y + this.height> game.canvas.height){
		this.y = 0;
		}
	}

	kubah.prototype.shoot = function() {
		if (game.missiles.length < 1 || game.missiles[game.missiles.length - 1].y > this.y + this.height + 45) {
			game.missiles[game.missiles.length] = new kubahMissile(this);
		}
	}

	kubah.prototype.die = function() {
		this.dead = true;
		MISSILERATE = MISSILERATE * 1.25;
		kubahAlive = false;
		for (var i = 0; i < game.enemies.length; i++) {
			if (game.enemies[i].dead === false) { 
				kubahAlive = true;
				break;
			}
		};
		if (kubahAlive === false) { game.nextLevel(); }
	}

	kubah.prototype.speed = function() {
		return game.kubahSpeed;
	}

function kubahMissile(kubah) {
	this.width = 3;
	this.height = 15;
	this.x = kubah.x + kubah.width / 2 - this.width / 3;
	this.y = kubah.y + this.height;

	this.speed = 10;
}
	kubahMissile.prototype.update = function() {
		this.y += this.speed;
		if (this.hit(game.player)) {
			game.player.die();
			this.y = 1000;
		}
	}

	kubahMissile.prototype.draw = function(context2D) {
	 	context2D.beginPath();
	    context2D.moveTo(this.x, this.y);
	    context2D.lineTo(this.x, this.y + this.height);
	    context2D.lineTo(this.x + this.width, this.y + this.height);
	    context2D.lineTo(this.x + this.width, this.y);
	    context2D.fillStyle = "red";
	    context2D.fill();
	}

	kubahMissile.prototype.hit = function(player) {
		horizontal = (this.x < player.x && player.x < (this.x + this.width)) || 
								(this.x < player.x + player.width && player.x + player.width < this.x + this.width) ||
								(player.x < this.x && this.x + this.width < player.x + player.width)
		vertical = (this.y < player.y && player.y < this.y + this.height) || 
								(this.y < player.y + player.height && player.y + player.height < this.y + this.height) ||
								(player.y < this.y && this.y + this.height < player.y + player.height)

		return horizontal && vertical;
	}	