class Plant extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x + 16, y + 16),
      createVector(32, 32), // Changed from 25 to 32 to align with gridSize
      images.Plant, // Ingen bild behövs
      0,
      0,
      createVector(0, 0)
    );
  }
}
