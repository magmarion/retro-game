class ScoreManager {
    private health: number; // Antal hjärtan
    private maxHealth: number; // Max antal hjärtan
    private heartImage: p5.Image;
  
    constructor(maxHealth: number, heartImage: p5.Image) {
      this.maxHealth = maxHealth;
      this.health = maxHealth; // Börjar med max hälsa
      this.heartImage = heartImage;
    }
  
    // Minskar hälsa
    decreaseHealth(): void {
      if (this.health > 0) {
        this.health--;
      }
    }
  
    // Ökar hälsa
    increaseHealth(): void {
      if (this.health < this.maxHealth) {
        this.health++;
      }
    }
  
    // Rita hjärtan på skärmen
    draw(): void {
      const heartSize = 40; // Storlek på hjärtan
      const spacing = 10; // Mellanrum mellan hjärtan
      const startX = 20; // Startposition (x)
      const startY = 20; // Startposition (y)
  
      for (let i = 0; i < this.maxHealth; i++) {
        if (i < this.health) {
          // Rita ett fullt hjärta
          image(this.heartImage, startX + i * (heartSize + spacing), startY, heartSize, heartSize);
        } else {
          // Rita ett "tomt" hjärta (genomskinlig version av samma bild)
          tint(255, 100); // Sätter transparens
          image(this.heartImage, startX + i * (heartSize + spacing), startY, heartSize, heartSize);
          noTint(); // Återställ färg
        }
      }
    }
  }
  