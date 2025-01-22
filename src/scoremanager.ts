class ScoreManager {
    private health: number; // antal hjärtan
    private maxHealth: number; // max antal hjärtan
    private heartImage: p5.Image;
  
    constructor(maxHealth: number, heartImage: p5.Image) {
      this.maxHealth = maxHealth;
      this.health = maxHealth;
      this.heartImage = heartImage;
    }
  
    decreaseHealth(): void {
      if (this.health > 0) {
        this.health--;
      }
    }
  
    draw(): void {
      const heartSize = 40;
      const spacing = 10;
      const startX = 20;
      const startY = 20;
  
      for (let i = 0; i < this.maxHealth; i++) {
        if (i < this.health) {
          image(this.heartImage, startX + i * (heartSize + spacing), startY, heartSize, heartSize);
        } else {
          tint(255, 100); // Transparent hjärta
          image(this.heartImage, startX + i * (heartSize + spacing), startY, heartSize, heartSize);
          noTint();
        }
      }
    }
  
    // Tom update-metod 
    update(): void {
      // metoden finns för att undvika fel
    }
  }
  