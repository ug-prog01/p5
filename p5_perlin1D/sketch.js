let xoff;
let start;
let inc;
let slide;

function setup() {
	createCanvas(700, 700);
	start = 0;
	slide = createSlider(0, 100, 50);
}

function draw() {
	// background(0);
	clear();
	inc = map(slide.value(), 0, 100, 0, 0.5);
	stroke(0);
	noFill();
	beginShape();
	xoff = start;
	for(let x = 0;x<width;x++) {
		let y = map(noise(height+xoff), 0, 1, 0, height);
		vertex(x, y);
		xoff+=inc;
	}
	endShape();

	start += inc;
	// noLoop();
}
