let nodes = [];
// let innernodes1 = [];
let innernodes = [];
let node;
let texts = ['image (1).gif', 'image (2).gif', 'image (3).gif', 'image (4).gif', 'image (5).gif'];
let innertexts = ['image (1).jpg', 'image (2).jpg', 'image (3).jpg', 'image (4).jpg', 'image (5).jpg'];

function setup() {
	createCanvas(600, 600);
	for(let i = 0; i < 5; i++) {
		nodes[i] = new Connection();
		nodes[i].create(texts[i]);
		let inx = random(width);
		let iny = random(height);
		innernodes[i] = [];
		for(let j = 0; j<5; j++) {
			// let innernodes = [];
			innernodes[i][j] = new Connection();
			innernodes[i][j].create(innertexts[j]);
			innernodes[i][j].positioning(random(inx-30, inx+30), random(iny-30, iny+30));
		}
		// innernodes1.push(innernodes);
		// nodes[i].createinner(innertexts, 5);
		// for(let j = 0;j<5;j++) {
		// 	nodes[i].inpositioning(random(inx-30, inx+30), random(iny-30, iny+30));
		// }
		nodes[i].positioning(inx,iny);
	}
}

function draw() {
	clear();
	for(let i = 0; i < nodes.length; i++) {
		nodes[i].connect();
		for(let j = 0; j < innernodes.length; j++) {
			// innernodes[i][j].innconnect(nodes[i].positionx(), nodes[j].positiony());
			// console.log(innernodes[i][j]);
			line(nodes[i].positionx(), nodes[i].positiony(), innernodes[i][j].positionx(), innernodes[i][j].positiony());
		}
	}
	line(mouseX, mouseY, 300, 300);
	noLoop();
}

function mousePressed() {
	let newConnection = new Connection();
	newConnection.create();
	newConnection.positioning(mouseX, mouseY);
	// let newConnection2 = new Connection();
	// newConnection2.create();
	// newConnection2.positioning(random(mouseX-10, mouseX+10), random(mouseY-10, mouseY+10));
	// innernodes.push(newConnection2);
	nodes.push(newConnection);
}

class Connection {
	constructor() {
		this.count = 0;
	}

	create(text) {
		this.node = createImg(text);
		this.node.size(10, 10);
	}

	// createinner(innodes, x) {
	// 	for(let i = 0;i<x;i++) {
	// 		this.innode[i] = createImg(innodes);
	// 		this.innode[i].size(10, 10);
	// 	}
	// }

	positioning(x, y) {
		while(this.count === 0) {
			this.x = x;
			this.y = y;
			this.node.position(this.x, this.y);
			this.count++;
		}
	}

	// inpositioning(x, y) {
	// 	this.xnew = x;
	// 	this.ynew = y;
	// 	this.innode.position(this.xnew, this.ynew);
	// }

	connect() {
		line(300, 300, this.x, this.y);
	}

	innconnect(x, y) {
		this.newx = x;
		this.newy = y;
		line(this.x, this.y, this.newx, this.newy);
	}

	positionx() {
		return this.x;
	}

	positiony() {
		return this.y;
	}
	// connect(x, y) {
	// 	line(x, y, this.x, this.y);
	// }

	// innconnect() {
	// 	line(this.x, this.y, this.xnew, this.ynew)
	// }
}
