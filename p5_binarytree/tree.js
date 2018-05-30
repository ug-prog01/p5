function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.addValue = function(val) {
  let k = new Node(val);
  if(this.root == null) {
    this.root = k;
    this.root.x = width/2;
    this.root.y = 20;
  } else {
    this.root.addNode(k);
  }
}

Tree.prototype.search = function(val) {
  let result = this.root.search(val);
  return result;
}
