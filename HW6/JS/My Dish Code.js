//refrence stuff
var myFont;

//pepper stuff
var myPeppers;
var pepperArray = [];
var pepperTimer = 3;

//animation
var idleAnimation = [];
var runAnimation = [];
var i = 0; 
var myCharacter;
var idleStrings = [];
var runStrings = [];

//player movement
var W = 87;
var A = 65;
var S = 83;
var D = 68;

var x = 150;
var y = 400;

var flipX = false;

//Countdown and Score
var score = 0;
var countdownTimer = 15;


function preload()
{

    idleStrings = loadStrings("../Data/Idle.txt");
    runStrings = loadStrings("../Data/Run.txt");

}


function setup() 
{
    createCanvas(600, 600);

    //animations setup
    for(var i = 0; i < idleStrings.length; i++)
        {
            myCharacter = new Character(idleStrings[i], x, y);
            idleAnimation.push(myCharacter);
        }
  for(var i = 0; i < runStrings.length; i++)
        {
            myCharacter = new Character(runStrings[i], x, y);
            runAnimation.push(myCharacter);
        }


  
    //assets
    myFont = loadFont("Assets/Fonts/Jersey10-Regular.ttf");

    //peppers
    

    for (let i = 0; i < 5; i++) {
        myPeppers = new Food(this.x2 = floor(random() * width) + 1, this.y2 = floor(random() * 475) + 1);
        pepperArray.push(myPeppers);
    }
    

    setInterval(animationInterval, 50);
    setInterval(countdownInterval, 1000);
    setInterval(pepperInterval, 1000);
    
}

function draw() 
{
  background(181, 231, 240);

  createPlate();
  
  createTamale();  

  createText();

  movePlayer();

  timer();

  pepperDisplay();

  pepperMove();

    if(score == 5)
         {
            textSize(35);
            fill(14, 148, 63);
            text("You Win!", 225, 300);
            clearInterval(countdownInterval);
        }
}


function countdownInterval()
{
    if(countdownTimer > 0)
    {
        countdownTimer --;
    }
}


 function createPlate()
 {
  //plate
 fill(255, 255, 255);
 ellipse(300, 450, 500, 150);
 ellipse(300, 450, 250, 75);
 }

 function createTamale()
 {
  //fillings bg
  fill(254, 195, 100);
  triangle(224, 466, 197, 387, 365, 387);
  triangle(224, 466, 365, 387, 392, 462);

  //meat
  fill(181, 28, 55);
  textSize(40)
  text('~~~~~~~~~~', 200, 400);
  text('~~~~~~~~~~', 205, 425);
  text('~~~~~~~~~~', 215, 450);

  //top
  fill(247, 224, 173); 
  triangle(198, 387, 364, 338, 364, 387); 
  triangle(363, 338, 501, 339, 364, 387); 

  triangle(366, 387, 503, 337, 391, 463);
  triangle(391, 463, 503, 337, 508, 418);


  //fillings
  fill(54, 176, 116);
  text('~~~~~~~~~~', 202, 412);
  text('~~~~~~~~~~', 207, 437);
  text('~~~~~~~~~~', 217, 462);

  fill(255, 255, 220);
  text('~~~~~~~~~~', 203, 420);
  text('~~~~~~~~~~', 208, 445);
  text('~~~~~~~~~~', 218, 470);

 }

 function createText()
 {
  fill(0);
 textSize(35);
 textFont(myFont); 
 text('SALSA MAKER', 25, 550);
 text('Score:' +  score, 25, 45);
 //text('00:00', 500, 45);
 textSize(22);
 text('move the character using WASD to collect the peppers for the salsa', 25, 575);
 }
   

 function animationInterval()
{
    i++;
    if(i > 9 || i > 7)
    {
        i = 0;
    }
    
}

function movePlayer()
{

    if (keyIsPressed)
    {
        runAnimation[i].draw();

        if (key == 'w') 
         {
            y -= 3
        }
        if (key == 's') 
        {
             y += 3
        }
        if (key == 'a') 
        {
            x -= 3
            flipX = true;
        }
        if (key == 'd') 
        {
            x += 3
            flipX = false;
        }

        console.log(x +'', y+'');

        for(let i = 0; i < runAnimation.length; i++)
            {
                runAnimation[i].flipX = flipX;
                runAnimation[i].x = x;
                runAnimation[i].y = y;
            }

        for(let i = 0; i < idleAnimation.length; i++)
        {
            idleAnimation[i].flipX = flipX;
            idleAnimation[i].x = x;
            idleAnimation[i].y = y;      
        }

        

        for (let k = 0; k < pepperArray.length; k++) 
        {
            if (runAnimation[i].hasCollided(pepperArray[k].x2, pepperArray[k].y2, 50, 50)) 
            {
                pepperArray.splice(k, 1); 
                score++;
            }
                
        }
    }
    else
    {
    idleAnimation [i].draw();  
    }     

}

function timer()
{
    textSize(35);
    if (countdownTimer >= 10) {
        text("0:" + countdownTimer, 500, 45);
    }
    if (countdownTimer < 10) {
        text('0:0' + countdownTimer, 500, 45);
    }
    if (countdownTimer == 0) {
        fill(181, 28, 55);
        text('Game Over', 225, 300);
    }
}


function pepperMove()
{
    if (pepperTimer == 3)
    {
        for (let i = 0; i < pepperArray.length; i++) 
            {
                 pepperArray [i].x2 = random(100, width-100);
                 pepperArray [i].y2 = random(100, height-100);
            }

    }
    if (pepperTimer == 0)
    {
        pepperTimer = 3;
    }
}

function pepperDisplay()
{
    for (let i = 0; i < pepperArray.length; i++) 
        {
             pepperArray [i].draw();
        }
}

function pepperInterval()
{
    if(pepperTimer > 0)
        {
            pepperTimer --;
        }
    
}

