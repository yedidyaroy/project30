class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255;
      this.image = loadImage("block.png");
    }
    display(){
      //console.log(this.body.speed);
      if (this.body.speed < 3){
        var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5
        tint(255,this.Visibility);
       // this.image = loadImage("block.png");
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
      }
    }
}