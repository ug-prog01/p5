let tree;
let addN;
let button;
let l = 2;

function setup() {
	createCanvas(700, 500);
	background(255);
	tree = new Tree();
	for(let i = 0; i < 10; i++) {
		tree.addValue(floor(random(0, 100)));
	}
	addN = select('#AddN');
	button = select('#AddB');
	button.mousePressed(addNode);
}

function draw() {
	tree.traverse();
}

function addNode() {
	tree.addValue(addN.value());
}
