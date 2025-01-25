class Plant extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y från LevelFactory
      createVector(32, 32), // Changed from 50×100 to 32×32 to align with gridSize
      images.Plant, // Bild
      0, // Horisontell hastighet
      0, // Vertikal hastighet
      createVector(0, 0) // Initial riktning
    );
  }
}
