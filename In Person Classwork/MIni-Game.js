//enemies 
var badWs = [];
var badHs = [];
var badXs = [];
var badYs = [];

var badCount = 3;

var speedX = 2;
var speedY = 2;

//character
var charaX = 100;
var charaY = 100;

var W = 87;
var A = 65;
var S = 83;
var D = 68;

function setup() 
{
    createCanvas(600, 600);

    for(var i = 0; i < badCount; i++)
    {
        badWs [i] = floor(random() * 100) + 1;
        badHs [i] = floor(random() * 100) + 1;
        badXs [i] = floor(random() * width) + 1;
        badYs [i] = floor(random() * height) + 1;
    }

    setInterval = (moveEnemies, 1000);
}

function draw() 
{
    background(7, 2, 38);

    createBads();

    createPlayer();

    movePlayer();

    portalWalls();

    moveEnemies();
}

function createPlayer() 
{
    fill(208, 247, 239)
    textSize(40)
    text('*', charaX, charaY)
}

function movePlayer()
{
    if (keyIsDown(W)) 
    {
        charaY -= 3
    }
    if (keyIsDown(S)) 
    {
        charaY += 3
    }
    if (keyIsDown(A)) 
    {
        charaX -= 3
    }
    if (keyIsDown(D)) 
    {
        charaX += 3
    }
}

//enemies stuff

function createBads() 
{
    fill(240, 22, 67);
    for(var i = 0; i <badCount; i++)
    {
    rect(badXs[i], badYs[i], badWs[i], badHs[i]);
    }
}

function portalWalls()
{
    if(charaX >= width)
    {
        charaX = 0;
    }
    if(charaY >= height)
    {
        charaY = 0;
    }
    if(charaX < 0)
    {
        charaX = width;
    }
    if(charaY < 0)
    {
        charaY = height;
    }
    
}

//move enemies
function moveEnemies()
{

    for(var i = 0; i <badCount; i++)
    {
        badXs[i] = badXs[i] + speedX;

        if(badXs[i]+badWs[i] >= width || badXs[i] <= 0)
        {
            speedX *=-1;
        }

        badYs[i] = badYs[i] + speedY; 

        if(badYs[i] <=0 || badYs[i]+badHs[i] >= height)
        {
            speedY *=-1
        }
    }   

}