class newball{
    constructor(x,y,radius){
       var option = {
           isStatic : true,
           
       } 
       this.body = Bodies.circle(x,y,radius,option)
       this.radius=radius
       World.add(world,this.body)
    }
   display(){
       var pos = this.body.position
       var angle = this.body.angle 
      
       ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,20,20);
    
   }

}