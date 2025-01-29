//my awesome tamale

var plateX = 300; 
var plateY =450; 
var movement; 

var triangleXOne = 224;
var triangleYOne = 466; 
var triangleMovement;

var mousex;
var mousey;

function setup() 
{
    createCanvas(600, 600);
    movement = floor(random()*10) + 1;
    triangleMovement = floor(random()*10) + 1;
}

function draw() 
{
 background(46, 89, 170);
//plate
 fill(255, 255, 255);
 ellipse(plateX, plateY, 500, 150);
 ellipse(plateX, plateY, 250, 75);

//fillings bg
fill(254, 195, 100);
triangle(triangleXOne, 466, 197, 387, 365, 387);
triangle(triangleXOne, 466, 365, 387, 392, 462);

//meat
 fill(181, 28, 55);
 textSize(32)
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

 fill(255); 
 textSize(20);
 text('Mackie Moreau', 450, 575);
 text('A Disassembling Tamale', 25, 30);
 textSize(14);
 text('click the mouse to place the last triangle', 30, 45);

//moving the plate

if(plateX >=600 || plateX >= 400)
{
    plateX = 300;
    plateY = 450; 
}
else
{
    plateX -= movement;
    plateY += movement;
}
if(plateX > 600)
    {
      plateX = 0
   }
  else if (plateX < 0)
    {
     plateX = 600
    }
  if(plateY > 600)
    {
      plateY = 0
    }
  else if (plateY < 0)
    {
     plateY = 600
    }

 if(triangleYOne >= 600 || triangleYOne <= 0)
     {
         triangleMovement*=-1;
     }
        triangleYOne -= triangleMovement;
        triangleXOne -= triangleMovement;

}

function mouseClicked()
 {
  mousex = mouseX
  mousey = mouseY
 }