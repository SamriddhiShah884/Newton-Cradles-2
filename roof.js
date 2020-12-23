class Roof{
    constructor(x,y,width,height){
        
        var options={
            'isStatic':true,
          
            
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Matter.Bodies.rectangle(this.x,this.y, this.width,this.height, options);
        World.add(world, this.body);

        
    }

    display(){
       var  ppos=this.body.position;
        push ();
        translate(ppos.x,ppos.y);
        fill ("#EEAEEE")
       rect (this.body.position.x,this.body.position.y,this.width, this.height );
        pop ();
     
    }
}