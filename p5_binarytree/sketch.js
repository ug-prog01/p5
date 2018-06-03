let tree;
let addN;
let button, tbdelete;
let added = [];

function setup() {
	createCanvas(700, 500);
	background(152);
	tree = new Tree();

	addN = select('#AddN');
	button = select('#AddB');
	button.mousePressed(addNode);
}

function draw() {
	background(150);
	if(tree.root != null) {
		tree.traverse();
	}
}

function mousePressed() {
	tbdelete = tree.clicked();
	for(let j = 0; j < added.length; j++) {
		if(tbdelete == added[j]) {
			added.splice(j, 1);
		}
	}
	tree = new Tree();
	for(let i = 0; i < added.length; i++) {
		tree.addValue(added[i]);
	}
	if(tree.root != null) {
		tree.traverse();
	}
}

function addNode() {
	if(addN.value() >= -100 && addN.value() <= 100) {
		tree.addValue(floor(addN.value()));
	}
	added.push(addN.value());
	addN.html(' ');
}
