class Pillar{
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
        this.x=x;
        this.y=y;
    }
    velocity(){
        this.x=this.x-6;
        if(this.x<-30){
            console.log("jeej")
            this.y=Math.round(random(300,400));
            this.x=Math.round(random(630,1080));
        }
    }
    display(){
        //var pos=this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }
}