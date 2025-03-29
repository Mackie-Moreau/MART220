
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var catImage;

//Obstacles
var myWalls;
var wallArray = [];

//collectables
var myPeppers;
var pepperArray = [];

//UI stuff
var score = 0;
var health = 10;

function preload() {
   idlePaths = loadStrings("images/idle/idle.txt");
   walkPaths = loadStrings("images/run/run.txt");
   
}

function setup() {
  createCanvas(700, 700);
  myAnimation = new animationImage( 200, 200, 150, 150);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('run', walkPaths);

  //obstacles
  for (let i = 0; i < 4; i++)
  {
    myWalls = new Walls(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * 475) + 1);
    wallArray.push(myWalls);
  }

  //collectables
  for (let i = 0; i < 15; i++) 
    {
        myPeppers = new Food(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * 475) + 1, 255, 112, 51);
        pepperArray.push(myPeppers);
        myPeppers = new Food(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * 475) + 1, 176, 201, 75);
        pepperArray.push(myPeppers);
    }
}

// display all the frames using the draw function as a loop
function draw() 
{

    background(141, 152, 167);

    movementAnimation();

    //obstacles
    wallDisplay();
    
    //collectables
    pepperDisplay();

    //UI stuff
   createText();
   winLose();
   
}

//Character
function movementAnimation()
{
    if(kb.pressing('d'))
        {
            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('run');    
            if(myAnimation.isColliding(myWalls))
            {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
                
            }     
        }
        else if(kb.pressing('a'))
        {
            myAnimation.updatePosition('reverse');
            myAnimation.drawAnimation('run');        
        }
        else if (kb.pressing('w'))
        {
            myAnimation.updatePosition('up');
            myAnimation.drawAnimation('run'); 
        }
        else if (kb.pressing('s'))
        {
            myAnimation.updatePosition('down');
            myAnimation.drawAnimation('run');    
        }
        else
        {
            myAnimation.drawAnimation('idle');
        }  

}

//Obstacles
function wallDisplay()
{
    for (let i = 0; i < wallArray.length; i++) 
        {
             wallArray [i].draw();
        }
}


//collectables
function pepperDisplay()
{
    for (let i = 0; i < pepperArray.length; i++) 
        {
             pepperArray [i].draw();
        }
}

//UI Stuff
function createText()
 {
    fill(0);
    textSize(35);
    //textFont(myFont); 
    text('SALSA MAKER', 25, 650);
    text('Score:' +  score, 25, 45);
    text('Health:' + health, 25, 100);
    textSize(22);
    text('move the character using WASD to collect the peppers for the salsa', 25, 675);
    text('avoid the moldy peppers', 25, 690);
 }
  
function winLose()
{
    if(score == 10)
        {
           textSize(35);
           fill(200, 255, 110);
           text("You Win!", 250, 350);
       }
    if(health == 0)
        {
           textSize(35);
           fill(255, 110, 110);
           text("You Lose!", 250, 350);
       }

}

