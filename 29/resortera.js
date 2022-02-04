class resortera{
    constructor(bodyA, pointB){
        var options = { 
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness:0.04
        }
        this.image1 = loadImage("sprites/a.png")
        this.image2 = loadImage("sprites/b.png")
        this.image3 = loadImage("sprites/c.png")
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    }
    
    fly(){
        this.chain.bodyA = null
    }

    display(){
    image(this.image1,150,80)
    image(this.image2,120,80) 
    push() 

        line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x-10,this.pointB.y);
        line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x-30,this.pointB.y-3);
        image(this.image3,this.chain.bodyA.position.x-30,this.chain.bodyA.position.y-10,15,30)
pop(); 

    }
}