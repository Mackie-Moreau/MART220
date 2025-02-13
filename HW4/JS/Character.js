class Character 
{
    constructor(path)
    {
        this.path = path;
        this.myImage = loadImage(this.path);
    }

    draw()
    {
        //image draw
        image(this.myImage, 150, 400, 100, 100);
    }

}

