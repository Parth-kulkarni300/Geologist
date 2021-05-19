class Stone {
    constructor(x, y) {
      var options = {
        'density':16,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     // pos.x = 50;
      //pos.y = 50;
     var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };