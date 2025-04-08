
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var attackAnimation;

//Obstacles
var barbedWireObject;
var barbedWireArray = [];
var x;
var y;


//collectables
var myPeppers;
var pepperArray = [];

//UI stuff
var score = 0;
var health = 10;

//particles
const particles = [];
var particleHealth = 100;


function preload() {
   idlePaths = loadStrings("images/idle/idle.txt");
   walkPaths = loadStrings("images/run/run.txt");
   attackPaths = loadStrings("images/attack/attack")
   
}

function setup() {
  createCanvas(700, 700);
  myAnimation = new animationImage( 200, 200, 150, 150);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('run', walkPaths);
  myAnimation.loadAnimation('attack', attackPaths);

  //obstacles
  for (let i = 0; i < 5; i++) 
  {
    barbedWireObject = new wall(x = floor(random() * width) + 1, y = floor(random() * width) + 1, 20, 175, 'static');
    barbedWireArray.push(barbedWireObject);
  } 

  //collectables
  for (let i = 0; i < 10; i++) 
    {
        myPeppers = new Food(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * 475) + 1, 176, 201, 75);
        pepperArray.push(myPeppers);
    }
}

// display all the frames using the draw function as a loop
function draw() 
{

    background(141, 152, 167);

    movementAnimation();
    
    //collectables
    pepperDisplay();

    //UI stuff
   createText();
   winLose();

   //attack and particles
   //attackStuff();
   //particleShow();
   
}

//Character
function movementAnimation()
{
    if(kb.pressing('d'))
        {
            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('run');     

            collisionDetect();
             
        }
        else if(kb.pressing('a'))
        {
            myAnimation.updatePosition('reverse');
            myAnimation.drawAnimation('run');   
            
            collisionDetect();
        }
        else if (kb.pressing('w'))
        {
            myAnimation.updatePosition('up');
            myAnimation.drawAnimation('run'); 

            collisionDetect();
        }
        else if (kb.pressing('s'))
        {
            myAnimation.updatePosition('down');
            myAnimation.drawAnimation('run'); 
            
            collisionDetect();
        }
        else if (kb.pressing('e'))
            {
                myAnimation.drawAnimation('attack'); 
               
                for (let i = 0; i < barbedWireArray.length; i++) 
                {    
                    console.log(barbedWireArray[i]);
                    //if (barbedWireArray != null) {
                        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, barbedWireArray[i].barbedWire.position.x, barbedWireArray[i].barbedWire.position.y) < 200) {
                            createParticles(barbedWireArray[i].barbedWire.position.x, barbedWireArray[i].barbedWire.position.y);
                            particleHealth -= 1;
                            if (particleHealth <=0)
                            {
                            barbedWireArray[i].barbedWire.remove();
                            score++;
                            //barbedWireArray[i] = null;
                            }
            
                    }
                }
            }
        else
        {
            myAnimation.drawAnimation('idle');
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
    text('move the character using WASD to avoid the moldy peppers', 25, 675);
    text('press e to destroy the barbed wire', 25, 690);
 }
  
function winLose()
{
    if(score >= 150)
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

//collision
function collisionDetect()
{
   /* if(myAnimation.isColliding(barbedWireArray))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }  */

        for (let k = 0; k < pepperArray.length; k++) 
            {
                if(collideRectRect(myAnimation.currentAnimation.x, myAnimation.currentAnimation.y, myAnimation.currentAnimation.w, myAnimation.currentAnimation.h, pepperArray[k].x2, pepperArray[k].y2, 50, 50))
                {
                    if(pepperArray[k].r ==255)
                        {
                          
                        }
                        else
                        {
                            health--;
                        }
                    pepperArray.splice(k, 1);
                }   
            }

}

//attack animation stuff


    function createParticles(x,y)
    {
    for (let i = 0; i < 5; i++) {
        let p = new Particle(x,y);
        particles.push(p);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
          // remove this particle
          particles.splice(i, 1);
        }
      }
    }
    

