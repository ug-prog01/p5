function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 2;
  this.prev = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scale);
    var y = floor(this.pos.y / scale);
    var index = x + y * cols;

    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(this.pos.x+250, this.pos.y-250, this.pos.x + this.pos.y /2, 20);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
   // point(this.pos.x, this.pos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.edges = function() {
    if(this.pos.x > width){
      this.pos.x = 0;
      this.updatePrev();
    }
    if(this.pos.x < 0){
      this.pos.x = width;
      this.updatePrev();
    }
    if(this.pos.y > height){
      this.pos.y = 0;
      this.updatePrev();
    }
    if(this.pos.y < 0){
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
