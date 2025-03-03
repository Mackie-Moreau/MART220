//make little circle peppers

class Food
{

    constructor(x2, y2)
    {
       this.x2 = x2;
       this.y2 = y2;
    }


    //creates peppers
    draw()
    {
        fill(255, 112, 51);
        circle(this.x2, this.y2, 50);
    }
}

    