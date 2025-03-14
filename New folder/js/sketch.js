
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];

//Obstacles
var myWalls;
var wallArray;

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
  for (let i = 0; i < 3; i++) 
    {
        myWalls = new walls(this.x = floor(random() * width) + 1, this.y = floor(random() * 475) + 1);
        wallArray.push(myWalls);
    }

}

// display all the frames using the draw function as a loop
function draw() 
{

    background(141, 152, 167);

    evilCube = square(200, 200, 50);

    movementAnimation();

    wallDisplay();
}

//Character
function movementAnimation()
{
    if(kb.pressing('d'))
        {
            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('run');    
            if(myAnimation.isColliding(wallArray))
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

