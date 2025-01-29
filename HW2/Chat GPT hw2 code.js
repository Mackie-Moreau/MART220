let shapes = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    shapes.push(new MovingShape());
  }
}

function draw() {
  background(30);
  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}

function mousePressed() {
  for (let shape of shapes) {
    if (shape.isClicked(mouseX, mouseY)) {
      shape.changeColor();
      shape.changeSpeed();
    }
  }
}

class MovingShape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(20, 50);
    this.xSpeed = random(2, 5);
    this.ySpeed = random(2, 5);
    this.color = color(random(255), random(255), random(255));
    this.shapeType = random(["circle", "square"]);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.shapeType === "circle") {
      ellipse(this.x, this.y, this.size);
    } else {
      rect(this.x, this.y, this.size, this.size);
    }
  }

  isClicked(mx, my) {
    if (this.shapeType === "circle") {
      return dist(mx, my, this.x, this.y) < this.size / 2;
    } else {
      return mx > this.x && mx < this.x + this.size && my > this.y && my < this.y + this.size;
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  changeSpeed() {
    this.xSpeed = random(2, 5) * (random() > 0.5 ? 1 : -1);
    this.ySpeed = random(2, 5) * (random() > 0.5 ? 1 : -1);
  }
}
