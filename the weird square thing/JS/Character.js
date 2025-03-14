class Character
{
constructor(path, x, y, w, h)
{
    this.path = path;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imageObjects = [];
    this.loadAnimation();
    this.i = 0;
    this.currentFrameCount = 0;
    this.direction  = "";
    this.currentAnimation;
}

getX()
    {
        return this.x;
    }

setX(x)
    {
        this.x = x;
    }

createAnimation()
{
    this.currentAnimation = createSprite(100, 100);
}


loadAnimation()
    {
         this.currentAnimation = loadAnimation(this.path[0], this.path[this.path.length-1]);   
    }

  drawAnimation()
    {  
        this.currentAnimation.frameDelay = 5; 
        animation(this.currentAnimation, 100, 100);
    }


    updatePosition(direction)
    {
        this.direction = direction;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount= currentFrameCount    
    }

    isRectanglesColliding(rectangle2)
    {
        return collideRectRect(this.x, this.y, 
         this.w, this.h,rectangle2.getX(), rectangle2.getY(),
          rectangle2.getW(), rectangle2.getH());
    
    }
    
}