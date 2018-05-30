let inc = 0.1;
let zoff = 0;
let xoff, yoff;
let scale = 10;
let cols, rows;
let particles;
let flowfield;

function setup() {
	createCanvas(500, 500);
	cols = floor(width/scale);
	rows = floor(height/scale);

	flowfield = new Array(cols * rows);

	particles = new Array();
	for(let i = 0; i < 100; i++) {
		particles[i] = new Particle();
	}
	background(255);
}

function draw() {

	yoff = 0;
	for(let y = 0; y < rows; y++) {
		xoff = 0;
		for(let x = 0; x < cols; x++) {
			let index = x + y * cols;
			let r = noise(xoff, yoff, zoff)*TWO_PI*4;
			let v = p5.Vector.fromAngle(r);
			v.setMag(0.5);
			flowfield[index] = v;

			xoff += inc;
			// stroke(0, 50);
			// strokeWeight(1);
			// push();
			// translate(x * scale, y * scale);
			// rotate(v.heading());
			// line(0, 0, scale, 0);
			// pop();
		}
		yoff += inc;
		zoff += 0.001;
	}
	for(let z = 0; z < 100; z++) {
		particles[z].follow(flowfield);
		particles[z].show();
		particles[z].update();
		particles[z].edges();
	}
	// noLoop();
}
