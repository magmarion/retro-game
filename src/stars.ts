/// <reference path="entity.ts" />

class Star extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x + 16, y + 16),
      createVector(32, 32), // Changed from 25 to 32 to align with gridSize
      images.star, // Ingen bild behövs
      0,
      0,
      createVector(0, 0)
    );
  }
}
