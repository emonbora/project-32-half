class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.04,
            lenght:1
        }
        this.sling1 = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling1);

    }
    fly(){
        this.sling1.bodyA =null;
    }
    attach(body){
        this.sling1.bodyA=body
    }
    display(){
        if(this.sling1.bodyA){
        var pointA = this.sling1.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
    
