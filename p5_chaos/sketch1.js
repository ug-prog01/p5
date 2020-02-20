let points;
let current, previous;

function setup() {
	createCanvas(windowWidth, windowHeight);
	reset();
}

function reset() {
	points = [];

	const n = 5;

	for (let i = 0; i < n; i++) {
		let angle = i * TWO_PI / n;
		let v = p5.Vector.fromAngle(angle);
		v.mult(width/4);
		v.add(width/2, height/2);
		points.push(v);
	}
	current = createVector(random(width), random(height));
	background(0);
}

function draw() {

	if (frameCount % 200 == 0) {
		//reset();
	}
	for(let i = 0; i < 100; i++) {
		strokeWeight(1);
		stroke(255, 0, 0);

		let next = random(points);
		if(next != previous) {
			current.x = lerp(current.x, next.x, 0.5);
			current.y = lerp(current.y, next.y, 0.5);
			point(current.x, current.y);
		}
		previous = next;
	}
}