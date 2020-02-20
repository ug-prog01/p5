let ax, ay, bx, by, cx, cy;
let x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = width/2;
	ay = 0;
	bx = 0;
	by = height;
	cx = width;
	cy = height;

	x = random(width);
	y = random(height);

	background(255);
	stroke(255);
	strokeWeight(8);
	point(ax, ay);
	point(bx, by);
	point(cx, cy);
	//ellipse(x, y, 20);
}

function draw() {
	//frameRate(1);
	for(let i = 0; i < 2; i++) {
		strokeWeight(3);
		point(x, y);
		//ellipse(x, y, 5);

		let r = floor(random(3));

		if(r == 0) {
			stroke(255, 0, 255);
			x = lerp(x, ax, 0.5);
			y = lerp(y, ay, 0.3);
		} else if(r == 1) {
			stroke(0, 255, 255);
			x = lerp(x, bx, 0.5);
			y = lerp(y, by, 0.5);
		} else if(r == 2) {
			stroke(0, 255, 0);
			x = lerp(x, cx, 0.6);
			y = lerp(y, cy, 0.6);
		}
	}
}
