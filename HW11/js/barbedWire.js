class wall
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.setup();
        this.barbedWire;
    }  

    setup()
    {

            this.barbedWire = createSprite(this.x, this.y, 20, 175, 'static');
            this.barbedWire.img = "images/barbed wire.png";
            this.barbedWire.scale = 0.05;
            this.barbedWire.diameter = 150;
    }



    
}