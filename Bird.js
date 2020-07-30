class Bird{
    constructor(x,y,width,height){
        var options={
            density:1,
            restitution:0,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    update(){
        this.body.position.y=this.body.position.y-5;
    }
    check(){
        if(this.body.position.y<-9){
           Matter.Body.setStatic(this.body,true); 
           textSize(34);
           text("Game Over",300,200);
        }
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //image(birdIMG,0,0);
        pop();
    }
}