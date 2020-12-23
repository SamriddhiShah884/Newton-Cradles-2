class   Rope{
    constructor(x,body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.y=250;

   
this.x=x;
       var options={
  bodyA:body1,
  bodyB:body2,

  pointB:{x:this.offsetX, y:this.offsetY}

        // stiffness: 0.04,
      
        
       }
     
       this.rope=Constraint.create(options);
       World.add(world,this.rope);

    }

    display(){
        strokeWeight (3);
       stroke ("red");
        line (this.rope.bodyA.position.x+100, this.rope.bodyA.position.y, this.rope.bodyB.position.x+this.x, this.rope.bodyB.position.y+70);
    }
}