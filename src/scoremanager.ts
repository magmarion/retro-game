class ScoreManager {
    private health: number;
    private maxHealth: number;
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
  
    draw(x: number, y: number): void {
        const heartSize = 40;
        const spacing = 10; // Mellanrum mellan hjärtan
        const fixedBackgroundWidth = 450; // Fast bredd för bakgrunden
        const backgroundHeight = heartSize + 20; // Höjd för bakgrunden med marginal
      
        // Bakgrund
        push();
        stroke(212, 175, 55); 
        strokeWeight(4);
        fill(245, 245, 220); 
        rect(x - 10, y - 10, fixedBackgroundWidth, backgroundHeight, 10); 
        pop();
      
        // Hjärtan
        for (let i = 0; i < this.maxHealth; i++) {
          if (i < this.health) {
            image(this.heartImage, x + i * (heartSize + spacing), y, heartSize, heartSize);
          } else {
            tint(255, 100); // Transparent hjärta
            image(this.heartImage, x + i * (heartSize + spacing), y, heartSize, heartSize);
            noTint();      
        }
      }
    }
  
    update(): void {
      // Eventuell logik för uppdatering
    }
  }
  