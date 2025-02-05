//enemies 
var badW;
var badH;
var badX;
var badY;

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
    badW = floor(random() * 100) + 1;
    badH = floor(random() * 100) + 1;
    badX = floor(random() * width) + 1;
    badY = floor(random() * height) + 1;
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
    else if (keyIsDown(S)) 
    {
        charaY += 3
    }
    else if (keyIsDown(A)) 
    {
        charaX -= 3
    }
    else if (keyIsDown(D)) 
    {
        charaX += 3
    }
}

//enemies stuff

function createBads() 
{
    fill(240, 22, 67);
    rect(badX, badY, badW, badH);
}

function portalWalls()
{
    if(charaX >= width)
    {
        charaX == 100;
    }
}

//move enemies
function moveEnemies()
{
    badX = badX + speedX;

    if(badX+badW >= width || badX <= 0)
    {
        speedX *=-1;
    }

    badY = badY + speedY; 

    if(badY <=0 || badY+badH >= height)
    {
        speedY *=-1
    }

}