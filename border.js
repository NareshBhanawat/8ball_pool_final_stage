class border {
constructor (x,y,width,height){
    var option = {
        isStatic :true,
        density : 1
    }
   this.body = Bodies.rectangle(x,y,width,height,option)
   this.width = width
   this.height = height
   World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    stroke("black")
    fill("black")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
}