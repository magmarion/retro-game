class Snake {
    private segments: p5.Vector[] = [];
    private direction: p5.Vector;
    private gridWidth: number;
    private gridHeight: number;
  
    constructor(gridWidth: number, gridHeight: number, startingSegments: number, xStart: number, yStart: number, startDirection: p5.Vector) {
      this.gridWidth = gridWidth;
      this.gridHeight = gridHeight;
      this.direction = startDirection;
  
      for (let x = xStart; x < xStart + startingSegments; x += 1) {
        this.segments.unshift(createVector(x, yStart));
      }
    }
  
    update() {
      this.segments.pop();
      let head = this.segments[0].copy();
      head.add(this.direction);
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
      }
    
      setDirection(newDirection: p5.Vector) {
        if (!newDirection.equals(this.direction.copy().mult(-1))) {
          this.direction = newDirection;
        }
      }
    
      checkForCollision(): boolean {
        let head = this.segments[0];
        if (
          head.x >= this.gridWidth ||
          head.x < 0 ||
          head.y >= this.gridHeight ||
          head.y < 0 ||
          this.selfColliding()
        ) {
          return true;
        }
        return false;
      }

      selfColliding(): boolean {
        let head = this.segments[0];
        let segmentsAfterHead = this.segments.slice(1);
        for (let segment of segmentsAfterHead) {
          if (segment.equals(head)) {
            return true;
          }
        }
        return false;
      }
    
      checkForFruit(fruit: p5.Vector): boolean {
        let head = this.segments[0];
        if (head.equals(fruit)) {
          this.segments.push(this.segments[this.segments.length - 1].copy());
          return true;
        }
        return false;
      }
    }