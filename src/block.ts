/// <reference path="entity.ts" />

class Block extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(50, 50), // Changed from 32 to 50
      null, // Ingen bild behövs
      0,
      0,
      createVector(0, 0)
    );
  }

  // Anpassning av block
  draw(): void {
    fill(255, 223, 0); // Gul färg
    noStroke();
    rect(
      this.position.x - this.size.x / 2,
      this.position.y - this.size.y / 2,
      this.size.x,
      this.size.y
    ); // Center the block
  }
}
