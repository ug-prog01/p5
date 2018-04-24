let frog;
let frogs = [];
let button1, button2;
let canvas;
let canvas2;

	class Frog {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.down = true;
			this.front = false;
			this.speedX = random(0.5, 1);
			this.speedY = random(-3, -1);
			this.r = random(0, 255);
			this.g = random(0, 255);
			this.b = random(0, 255);
		}

		make() {
			fill(this.r, this.g, this.b);
			noStroke();
			ellipse(this.x, this.y, 20, 30);
		}

		move() {
			// this.x += this.speedX;
			// this.y += this.speedY;
			// if(this.x >= height || this.x <= 0 || this.y >= width || this.y <= 0) {
			// 	this.speedX = -this.speedX;
			// 	this.speedY = -this.speedY;
			// }
			if(this.down)
				this.y = this.y + 1;
			if(this.y >= 350) {
				this.down = false;
				this.front = true;
			}
			if(!this.down && this.front) {
				this.x += this.speedX;
				this.y += this.speedY;
				if(this.y <= 250) {
					this.speedY = -this.speedY;
				} else if(this.y >= 350) {
					this.speedY = -this.speedY;
				}
				if(this.x < 0) {
					this.speedX = -this.speedX;
				} else if(this.x > width) {
					this.speedX = -this.speedX;
				}
			}
		}
	}

function setup() {
	canvas = createCanvas(600, 400);
	//canvas2 = createCanvas(200, 200);
	button1 = createButton('Add');
	button1.position(600, 450);
	button1.mousePressed(Add);
	canvas.position(0, 50);
	canvas.mousePressed(canvasAdd);
	//canvas2.position(700, 10);
	button2 = createButton('Remove');
	button2.mousePressed(Remove);
	button2.position(650, 450);
}

function Remove() {
	let b;
	// frogs.splice(frogs.length-1, 1);
	// frogs.length = frogs.length - 1;
	frogs.pop();
}

function Add() {
	let d = new Frog(random(50, 600), random(100, 350));
	frogs.push(d);
}

function canvasAdd() {
	let d = new Frog(mouseX, mouseY);
	frogs.push(d);
}

function draw() {
	clear();
	//background(200);
	noStroke();
	fill(240);
	stroke(0, 255);
	//line(pmouseX, pmouseY, mouseX, mouseY);
	rect(0, 40, 100, 100);
	stroke(255);
	for(let i = 0;i<frogs.length;i++) {
		frogs[i].make();
		frogs[i].move();
	}
	fill(0, 0, 255);
	textSize(46);
	text(frogs.length, 10, 80);
}

// function mousePressed() {
// 	if(mouseX > 0 && mouseX < 100  && mouseY > 0 && mouseY < 100) {
// 		stroke(255, 255);
// 		line(pmouseX, pmouseY, mouseX, mouseY);
// 	}
// 	else {
// 		let b = new Frog(mouseX, mouseY);
// 		frogs.push(b);
// 	}
// }
