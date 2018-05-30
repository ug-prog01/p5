function Node(val, x, y) {
  this.x = x;
  this.y = y;
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.visit = function(parent) {
  if(this.left != null) {
    this.left.visit(this);
  }

  if(this.right != null) {
    this.right.visit(this);
  }
  stroke(0);
  line(parent.x, parent.y, this.x, this.y);

  fill(160, 160, 60);
  stroke(1);
  ellipse(this.x, this.y, 26);

  fill(0);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);

}

Node.prototype.search = function(val) {
  if(this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.addNode = function(n) {
  if( n.value < this.value ) {
    if(this.left == null) {
      this.left = n;
      if(this.x > 350) {
        this.left.x = 350 + (this.x-350)*1/l;
      } else {
        this.left.x = this.x*(l-1)/l;
      }
      this.left.y = this.y + 50;
      l++;
    } else {
    this.left.addNode(n);
    }
  } else if(n.value > this.value){
      if(this.right == null) {
        this.right = n;
        this.right.x = this.x + this.x/l;
        this.right.y = this.y + 50;
        l++;
      }
      else {
        this.right.addNode(n);
      }
    }
}
