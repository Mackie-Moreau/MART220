class Character 
{
    constructor(path, x, y)
    {
        this.path = path;
        this.myImage = loadImage(this.path);
        this.x = x;
        this.y = y;
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.flipX = false;
    }

    draw()
    {
        push();
        if (this.flipX)
        {
            translate(this.imageWidth, 0);
            scale(-1.0, 1.0);    // flip x-axis backwards
            image(this.myImage, -this.x, this.y, 100, 100);

        }
        else 
        {
            image(this.myImage, this.x, this.y, 100, 100);
        }
        pop();
    }

    hasCollided(x2, y2, w2, h2) {
        return (
          this.x < x2 + w2 &&
          this.x +  this.imageWidth > x2 &&
          this.y < y2 + h2 &&
          this.y + this.imageHeight > y2
        );
    }

}

