class Bob{
    constructor(x,y){
        
        var options={
            'isStatic':true,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2       
            
        }

        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y, 40, options);
        World.add(world, this.body);
        this.r=40;
        
    }

    display(){
       var  pos=this.body.position;
        push ();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("#AB82FF");
        ellipse(100,5,this.r,this.r);
        pop ();
     
    }
}

