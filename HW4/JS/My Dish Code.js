//my awesome tamale

var plateX = 300; 
var plateY = 450; 
var speedX = 2; 
var speedY = 2; 

var triangleXOne = 224;
var triangleYOne = 466; 
var triangleMovement;

var mousex;
var mousey;

//fork stuff
var forkX = 100;
var forkY =100;
var speedX2 = 2; 
var speedY2 = 2; 


//refrence stuff
var myFont;
var chatgptFork;
var myTable;
var myBG;

//timer stuff
var forkInterval;

//animation
var animation = [];
var i = 0; 
var myCharacter;

function preload()
{
     
    for(var i = 0; i < 10; i++)
    {
        myCharacter = new Character('Assets/Images/Idle Animation/Idle ('+ i+ ').png');
        animation.push(myCharacter);
    }

}


function setup() 
{
    createCanvas(600, 600);

    triangleMovement = floor(random()*10) + 1;

    //assets
    myFont = loadFont("Assets/Fonts/Caveat-VariableFont_wght.ttf");
    myBG = loadImage("Assets/Images/sky.jpg");
    myTable = loadImage("Assets/Images/table.jpg");
    chatgptFork = loadImage("Assets/Images/fork_clipart.jpg");

    forkInterval = setInterval(moveFork, 1000);

    setInterval(animationInterval, 50);
    
}

function draw() 
{
  background(myBG, 600, 600);

  image(myTable, 0, 400, 600, 300);

  image(chatgptFork, forkX, forkY, 100, 100);

  createPlate();

  createTamale();

  createText();

  movePlate();

  finishTamale();

  animation [i].draw();
 
 
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
 fill(255);
 text('A Disassembling Tamale', 25, 30);
 textSize(22);
 text('click the mouse to place the last triangle', 30, 45);
 }

 //move fork

 function moveFork()
 {
    

    if(forkX <= 300)
    {
        forkX +=15;
    }
    else
    {

         clearInterval = (forkInterval); 
    }
   
 }

 function animationInterval()
{
    i++;
    if(i > 9)
    {
        i = 0;
    }
    
}
