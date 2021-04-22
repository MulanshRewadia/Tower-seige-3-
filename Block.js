class Block{
    constructor(x, y, width, height,) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0,
            
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }

      score()
      {
        if(this.body.speed<5){
          var rand = random(1,7);
          score = score + rand ;
        }
      }
      display(){
        console.log(this.body.speed);
        var score = 0;
        fill("blue");
        text("SCORE :" + score,900,50);
        if (this.body.speed<5){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink")
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-2;
          tint(255, this.visibility);
          pop();
        }
      }
}