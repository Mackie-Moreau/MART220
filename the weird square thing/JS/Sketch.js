//Fonts and images
var myFont;

//Countdown and Score
var score = 0;
var countdownTimer = 30;

//Sound
var bgMusic;
var badSound;
var goodSound;

//Character Related 
var cowpokeIdle =[];
var myAnimation;


//Preload
function preload()
{
    //Sound
    bgMusic = loadSound("Assets/Sounds/BITB Youve Changed.mp3");
    badSound = loadSound("Assets/Sounds/bad sound.mp3");
    goodSound = loadSound("Assets/Sounds/good sound.wav");

    //Character Related
    cowpokeIdle = loadStrings("Data/Idle.txt");
}

//Setup
function setup()
{
    //canvas
    createCanvas(600, 600);

    //Fonts and Images
    myFont = loadFont("Assets/Fonts/Jersey10-Regular.ttf");

    //Countdown
    setInterval(countdownInterval, 1000);

    //Sound
    bgSound();

    //Character Related
    myAnimation = new Character(cowpokeIdle, 100, 100, 100, 100);
    
    

}

//Draw
function draw()
{
    //Visuals
    background(141, 152, 167);

    //Countdown and Score
    timer();
    scoreboard();

    //Character Related
    myAnimation.updatePosition('Idle');
    myAnimation.setCurrentFrameCount(frameCount);
    myAnimation.drawAnimation();
    myAnimation.createAnimation();
}

//Countdown and Score
function countdownInterval()
{
    if(countdownTimer > 0)
    {
        countdownTimer --;
    }
}

function timer()
{
    fill(0)
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

function scoreboard()
{
    fill(0);
    textSize(35);
    textFont(myFont); 
    text('Score:' +  score, 25, 45);

    if (score==10)
    {
        fill(233, 177, 93);
        text('You Won!', 225, 300);
    }
}

//Sounds
function bgSound()
{
    bgMusic.play();
    bgMusic.loop();
    bgMusic.setVolume(0.5);
    userStartAudio();
}