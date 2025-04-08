//make little circle peppers

class Food
{

    constructor(x2, y2, r, g, b)
    {
       this.x2 = x2;
       this.y2 = y2;
       this.r = r;
       this.g = g;
       this.b = b;

    }


    //creates peppers
    draw()
    {
        fill(this.r, this.g, this.b);
        circle(this.x2, this.y2, 20);
    }

   /* normalPeppers()
    {
        fill(255, 112, 51);
        circle(this.x2, this.y2, 50);
    }

    evilPeppers()
    {
        fill(176, 201, 75);
        square(this.x3, this.y3, 25);
    }*/
}



  




    