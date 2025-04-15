var concrete;
var wood;
var nostromo;

var words;

var spider;

var randX = 70;
var randY = 70;

var myBoxes;
var boxArray = [];

function preload()
    {
        concrete = loadImage("Assets/Images/concrete.jpg");
        wood = loadImage("Assets/Images/wood.jpg");
        nostromo = loadImage("Assets/Images/nostromo.jpg");

        words = loadFont('Assets/Fonts/Jersey10-Regular.ttf');

        spider = loadModel('Assets/Models/Spider-sona_model.obj', true);
    }

function setup() 
    {
        createCanvas(600, 600, WEBGL);

       

       for (let i = 0; i < 5; i++) 
        {
            myBoxes = new BOXED (50, 50);
            boxArray.push(myBoxes);
        } 
    }
  
function draw()
    {
        background(200);

        for (let i = 0; i < 5; i++) 
        {
        boxArray [i].draw();
        }

        push();
        texture(nostromo);
        rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.05);
        translate(randX, randY);
        box(50, 50);
        pop();

        push();
        texture(concrete);
        rotateX(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        translate(100, 100);
        sphere(50, 50);
        pop();

        push();
        texture(wood);
        rotateY(frameCount * 0.02);
        rotateZ(frameCount * 0.02);
        translate(100, -100);
        cylinder();
        pop();

        push();
        normalMaterial();
        rotateX(frameCount * 0.03);
        rotateZ(frameCount * 0.03);
        translate(-randX, randY);
        ellipsoid(25, 50);
        pop();

        push();
        specularMaterial(150, 0, 0);
        rotateX(frameCount * 0.005);
        rotateY(frameCount * 0.005);
        translate(-100, -100);
        cone(50, 50);
        pop();
        

        push();
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        model(spider);
        pop();

        fill('#ED225D');
        textFont(words);
        textSize(36);
        text("My Awesome Shapes 2 (!)", -290, 200);
        textSize(24);
        text("by Mackie Moreau", -290, 230);

    }

    function mousePressed()
    {
        randX = floor(random() * width - 100) + 1;
        randY = floor(random() * height - 100) + 1;
    }
