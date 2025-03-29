class Walls
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        fill(65, 71, 78);
        rect(this.x, this.y, 20, 175);
    }
}