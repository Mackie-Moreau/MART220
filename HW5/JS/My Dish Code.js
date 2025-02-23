//my awesome tamale

var plateX = 300; 
var plateY = 450; 
var speedX = 1; 
var speedY = 1; 

var triangleXOne = 224;
var triangleYOne = 466; 
var triangleMovement;

var mousex;
var mousey;

//refrence stuff
var myFont;
var myTable;

//pepper stuff
var myPeppers;
var pepperArray = [];


//animation
var animation = [];
var i = 0; 
var myCharacter;

//player movement
var W = 87;
var A = 65;
var S = 83;
var D = 68;
var x = 100;
var y = 100;


function preload()
{

    for(var i = 0; i < 10; i++)
    {
        myCharacter = new Character('Assets/Images/Idle Animation/Idle ('+ i+ ').png', x, y);
        animation.push(myCharacter);
    }

}


function setup() 
{
    createCanvas(600, 600);

    triangleMovement = floor(random()*10) + 1;

  
    //assets
    myFont = loadFont("Assets/Fonts/Caveat-VariableFont_wght.ttf");
    myTable = loadImage("Assets/Images/table.jpg");

    //peppers
    //pepperRandom();
    

    for (let i = 0; i < 3; i++) {
        myPeppers = new Food(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * height) + 1);
        pepperArray.push(myPeppers);
    }
    

    setInterval(animationInterval, 50);
    
}

function draw() 
{
    background(181, 231, 240);

  image(myTable, 0, 400, 600, 300);
   
  createPlate();
  
  createTamale();  
  
  finishTamale();

  createText();

  movePlate();
  
  myPeppers.draw(); 

  for (let i = 0; i < 3; i++) 
    {
        pepperArray[i].draw();
    }


  animation [i].draw();
 
  movePlayer();

  for (let k = 0; k < pepperArray.length; k++) 
    {
        if (animation[i].hasCollided(pepperArray[k].x2, pepperArray[k].y2, 50, 50)) 
        {
            pepperArray.splice(k, 1); 
        }
       
        
    }
}

function mouseClicked()
 {
  mousex = mouseX
  mousey = mouseY
 }

 function createPlate()
 {
  //plate
 fill(255, 255, 255);
 ellipse(plateX, plateY, 500, 150);
 ellipse(plateX, plateY, 250, 75);
 }

 function movePlate()
 {
  //moving the plate

  plateX = plateX + speedX;

  if(plateX >= width || plateX <= 0)
  {
      speedX *=-1;
  }

  plateY = plateY + speedY; 

  if(plateY <=0 || plateY >= height)
  {
      speedY *=-1
  }
 }

 function createTamale()
 {
  //fillings bg
  fill(254, 195, 100);
  triangle(triangleXOne, 466, 197, 387, 365, 387);
  triangle(triangleXOne, 466, 365, 387, 392, 462);

  //meat
  fill(181, 28, 55);
  textSize(40)
  text('~~~~~~~~~', 200, 400);
  text('~~~~~~~~~', 205, 425);
  text('~~~~~~~~~', 215, 450);
  text('~~~~~~~~~', 225, 475);

  //top
  fill(247, 224, 173); 
  triangle(mousex, mousey, 364, 338, 364, 387); 
  triangle(363, 338, 501, 339, 364, 387); 

  triangle(366, 387, 503, 337, 391, 463);
  triangle(391, 463, 503, 337, 508, 418);


  //fillings
  fill(54, 176, 116);
  text('~~~~~~~~~', 202, 412);
  text('~~~~~~~~~', 207, 437);
  text('~~~~~~~~~', 217, 462);

  fill(255, 255, 220);
  text('~~~~~~~~~', 203, 420);
  text('~~~~~~~~~', 208, 445);
  text('~~~~~~~~~', 218, 470);

 }

 function finishTamale()
 {
     //mouseclick triangle
 if(triangleYOne >= 600 || triangleYOne <= 0)
  {
      triangleMovement*=-1;
  }
     triangleYOne -= triangleMovement;
     triangleXOne -= triangleMovement;

 }

 function createText()
 {
  fill(0);
 textSize(35);
 textFont(myFont); 
 text('Mackie Moreau', 400, 575);
 text('A Less Cluttered Version', 25, 30);
 textSize(22);
 text('move the character using WASD to collect the peppers', 30, 52);
 }
   

 function animationInterval()
{
    i++;
    if(i > 9)
    {
        i = 0;
    }
    
}

function movePlayer()
{
    if (keyIsDown(W)) 
        {
            y -= 3
        }
        if (keyIsDown(S)) 
        {
            y += 3
        }
        if (keyIsDown(A)) 
        {
            x -= 3
        }
        if (keyIsDown(D)) 
        {
            x += 3
        }



}