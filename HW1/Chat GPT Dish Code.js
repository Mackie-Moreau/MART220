
function setup() {
    createCanvas(600, 400);
    noLoop();
  }
  
  function draw() {
    background(240);
  
    // Draw the plate
    fill(220);
    ellipse(300, 250, 300, 150);
  
    // Draw the spaghetti noodles
    stroke(255, 228, 181);
    strokeWeight(3);
    for (let i = 0; i < 50; i++) {
      let startX = random(200, 400);
      let startY = random(200, 300);
      let endX = startX + random(-50, 50);
      let endY = startY + random(-30, 30);
      bezier(startX, startY, startX + 20, startY - 20, endX - 20, endY + 20, endX, endY);
    }
  
    // Draw the meatballs
    noStroke();
    fill(139, 69, 19);
    for (let i = 0; i < 5; i++) {
      let x = random(250, 350);
      let y = random(200, 270);
      ellipse(x, y, 30, 30);
    }
  
    // Draw sauce on top
    fill(220, 20, 60, 200);
    for (let i = 0; i < 7; i++) {
      let x = random(240, 360);
      let y = random(200, 270);
      ellipse(x, y, random(20, 40), random(15, 30));
    }
  
    // Add a sprinkle of parsley
    fill(34, 139, 34);
    for (let i = 0; i < 10; i++) {
      let x = random(240, 360);
      let y = random(200, 270);
      ellipse(x, y, 5, 5);
    }
}