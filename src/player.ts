interface GameObject {
    update(): void;
    draw(): void;
  }
  
  class Player implements GameObject {
    update() {
      // Player update logic
    }
  
    draw() {
      // Player draw logic
    }
  }
  
  class Snake implements GameObject {
    private segments: p5.Vector[] = [];
    private direction: p5.Vector;
    private segmentSize: number = 20;
    private spacing: number = 10;
  
    constructor() {
      this.direction = createVector(1, 0);
      for (let i = 0; i < 6; i++) {
        this.segments.push(createVector(30 + i * this.spacing, 250));
      }
    }
  
    update() {
      let head = this.segments[0].copy();
      head.add(this.direction.copy().mult(this.spacing));
      this.segments.pop();
      this.segments.unshift(head);
    }
  
    draw() {
      noFill();
      stroke(96, 255, 64);
      beginShape();
      for (let segment of this.segments) {
        vertex(segment.x, segment.y);
      }
      endShape();
  
      // Draw the snake eyes
      fill(0);
      stroke(255);
      strokeWeight(1);
      let head = this.segments[0];
      circle(head.x, head.y - 5, 5);
      circle(head.x - 5, head.y - 5, 5);
    }
  }
  
  class Game {
    private gameObjects: GameObject[] = [];
    private snakeSpawnTimer: number;
  
    constructor() {
      this.gameObjects = [new Player()];
      this.snakeSpawnTimer = 0;
    }
  
    public update() {
      for (const gameObject of this.gameObjects) {
        gameObject.update();
      }
  
      this.spawnSnake();
    }
  
    private spawnSnake() {
      if (this.snakeSpawnTimer <= 0) {
        this.gameObjects.push(new Snake());
        this.snakeSpawnTimer = 100;
      }
  
      this.snakeSpawnTimer -= deltaTime;
    }
  
    public draw() {
      background("#9bf");
  
      for (const gameObject of this.gameObjects) {
        gameObject.draw();
      }
    }
  }
  
  let game: Game;
  
  function setup() {
    createCanvas(400, 400);
    frameRate(3);
    game = new Game();
  }
  
  function draw() {
    game.update();
    game.draw();
  }