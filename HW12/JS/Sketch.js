var concrete;
var wood;
var nostromo;

var words;


function preload()
    {
        concrete = loadImage("Images/concrete.jpg");
        wood = loadImage("Images/wood.jpg");
        nostromo = loadImage("Images/nostromo.jpg");

        words = loadFont('Assets/Fonts/Jersey10-Regular.ttf');
    }

function setup() 
    {
        createCanvas(600, 600, WEBGL);
    }
  
function draw()
    {
        background(200);

        push();
        texture(nostromo);
        translate(200, 200, -200);
        rotateX(frameCount * 0.01);
        box(50, 50);
        pop();

        push();
        texture(concrete);
        translate(75, 75, -50);
        rotateY(frameCount * 0.01);
        sphere(50, 50);
        pop();

        push();
        texture(wood);
        translate(-150, -150, 150);
        rotateY(frameCount * 0.01);
        cylinder(25, 50);
        pop();

        push();
        normalMaterial();
        translate(-75, -75, 50);
        rotateX(frameCount * 0.01);
        ellipsoid(25, 50);
        pop();

        push();
        specularMaterial(150, 0, 0);
        rotateZ(frameCount * 0.01);
        cone(50, 50);
        pop();

        fill('#ED225D');
        textFont(words);
        textSize(36);
        text("My Awesome Shapes", -290, 200);
        textSize(24);
        text("by Mackie Moreau", -290, 230);

    }