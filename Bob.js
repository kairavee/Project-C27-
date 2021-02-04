class Bob
{
    constructor(x,y,radius)
{

    var options=
    {
        isStatic:false,
        density:0.8,
        restitution:1,
        friction:0
    }

    this.radius=radius
    this.body=Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body)
}

display()
{   
  fill ("purple");
  ellipseMode(RADIUS);
  ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
}
}