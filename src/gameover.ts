// let player: Player;
// let obstacles: Obstacle[] = [];
// let gameOver: boolean = false;

// function setup() {
//     createCanvas(800, 600);
//     player = new Player();
// }

// function draw() {
//     background(220);

//     if (gameOver) {
//         displayGameOver();
//         return;
//     }

//     player.update();
//     player.display();

//     if (frameCount % 60 === 0) {
//         obstacles.push(new Obstacle());
//     }

//     for (let obstacle of obstacles) {
//         obstacle.update();
//         obstacle.display();
//         if (player.collidesWith(obstacle)) {
//             gameOver = true;
//         }
//     }

//     obstacles = obstacles.filter(obstacle => !obstacle.offscreen());
// }

// function displayGameOver() {
//     fill(255, 0, 0);
//     textSize(50);
//     textAlign(CENTER, CENTER);
//     text("Game Over", width / 2, height / 2);
// }

// class Player {
//     x: number;
//     y: number;
//     size: number;
//     speed: number;

//     constructor() {
//         this.x = width / 2;
//         this.y = height - 40;
//         this.size = 20;
//         this.speed = 5;
//     }

//     update() {
//         if (keyIsDown(LEFT_ARROW)) {
//             this.x -= this.speed;
//         }
//         if (keyIsDown(RIGHT_ARROW)) {
//             this.x += this.speed;
//         }
//         this.x = constrain(this.x, 0, width - this.size);
//     }

//     display() {
//         fill(0, 255, 0);
//         noStroke();
//         rect(this.x, this.y, this.size, this.size);
//     }

//     collidesWith(obstacle: Obstacle) {
//         return collideRectRect(this.x, this.y, this.size, this.size, obstacle.x, obstacle.y, obstacle.size, obstacle.size);
//     }
// }

// class Obstacle {
//     x: number;
//     y: number;
//     size: number;
//     speed: number;

//     constructor() {
//         this.x = random(width);
//         this.y = -20;
//         this.size = 20;
//         this.speed = 3;
//     }

//     update() {
//         this.y += this.speed;
//     }

//     display() {
//         fill(255, 0, 0);
//         noStroke();
//         rect(this.x, this.y, this.size, this.size);
//     }

//     offscreen() {
//         return this.y > height;
//     }
// }

// import p5.js if using p5.js
import p5 from 'p5';

enum GameState {
    Playing,
    GameOver,
}

class Game {
    private state: GameState;
    private gameOverTextAlpha: number; // for fade effect

     constructor() {
        this.state = GameState.Playing;
        this.gameOverTextAlpha = 0;
    }

    public setup(): void {
        createCanvas(800, 600);
        textAlign(CENTER, CENTER);
    }

    public draw(): void {
        background(0); // black background for game

        if (this.state === GameState.Playing) {
            // game content goes here (example: draw something on screen)
            fill(255);
            textSize(32);
            text('Game in progress', width / 2, height / 2);

            // Randomly change state to GameOver (for demo purposes)
            if (Math.random() < 0.01) {
                this.endGame();
            }
        } else if (this.state === GameState.GameOver) {
            this.GameOverScreen();
        }
    }

    private endGame(): void {
        this.state = GameState.GameOver;
    }

    private showGameOverScreen(): void {
        // fade in Game Over text
        this.gameOverTextAlpha = min(this.gameOverTextAlpha + 5, 255);

        fill(255, this.gameOverTextAlpha);
        textSize(64);
        text('Game Over', width / 2, height / 2 - 50);

        textSize(32);
        text('Press "R" to restart', width / 2, height / 2 + 50);

        // check for key press to restart game
        if (keyIsPressed && key === 'r') {
            this.restartGame();
        }
    }

    private restartGame(): void {
        this.state = GameState.Playing;
        this.gameOverTextAlpha = 0; // reset fade effect
    }
}

// initialize the game instance
const game = new Game();

function setup() {
    game.setup();
}

function draw() {
    game.draw();
}
