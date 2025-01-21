/// <reference path="button.ts" />

class GameOver extends GameScreen { 
    restartButton: Button;
    private restartButton: Button; 
    
    constructor() { 
        super(); 
        this.restartButton = new Button("Restart", createVector(100, 100), createVector(200, 50), "white", "red"); 
    } 
    
     
    
    drawTitle(): void { 
        fill("white");
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Game Over", 100, 50); 
    } 
    
    update(): void {
        if (this.restartButton.isClicked()) {
            game.changeScreen(new GameBoard(createVector(800, 600)));
        }
    }
    
    draw(): void { 
        background("black");
        this.drawTitle(); 
        this.restartButton.draw(); 
    
    } 
    
}