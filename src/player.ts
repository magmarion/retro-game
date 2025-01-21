class Player {
  private position: p5.Vector;
  private size: number = 20;

  constructor(x: number, y: number) {
    this.position = createVector(x, y);
  }

  update() {
    // Player update logic (if any)
  }

  draw() {
    fill(0, 0, 255);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}