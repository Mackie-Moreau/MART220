class BOXED
{

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        push();
        texture(nostromo);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        translate(randX, randY);
        box(this.x, this.y);
        pop();
    }

}