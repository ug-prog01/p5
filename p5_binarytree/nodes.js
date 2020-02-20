function Node(val, x, y) {
  this.x = x;
  this.y = y;
  this.value = val;
  this.status = 'included';
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

  if (this.status == "included") {
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

Node.prototype.deletethis = function() {
  let d = dist(mouseX, mouseY, this.x, this.y);
  if(d <= 26 ) {
    this.status = 'notincluded';
    return this.value;
  } else if (mouseX < this.x && this.left != null) {
    return this.left.deletethis();
  } else if (mouseX > this.x && this.right != null) {
    return this.right.deletethis();
  }
  return null;
}

Node.prototype.addNode = function(n) {
  if( n.value < this.value ) {
    if(this.left == null) {
      this.left = n;
      if(this.y == 20) {
        this.left.x = this.x - width/4;
      } else if(this.y == 70) {
        this.left.x = this.x - width/8;
      } else if(this.y == 120) {
        this.left.x = this.x - width/12;
      } else if(this.y == 170) {
        this.left.x = this.x - width/16;
      } else if(this.y == 220) {
        this.left.x = this.x - width/20;
      }
      this.left.y = this.y + 50;
    } else {
    this.left.addNode(n);
    }
  } else if(n.value > this.value){
      if(this.right == null) {
        this.right = n;
        if(this.y == 20) {
          this.right.x = this.x + width/4;
        } else if(this.y == 70) {
          this.right.x = this.x + width/8;
        } else if(this.y == 120) {
          this.right.x = this.x + width/12;
        } else if(this.y == 170) {
          this.right.x = this.x + width/16;
        } else if(this.y == 220) {
          this.right.x = this.x + width/20;
        }
        this.right.y = this.y + 50;
      }
      else {
        this.right.addNode(n);
      }
    }
}
