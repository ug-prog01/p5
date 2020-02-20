let y = [];
let x = [];

const USER = 0;
const FOURIER = 1;

let fourierY;
let fourierX;

let time = 0;
let path = [];
let drawing = [];
let state = USER;

function mousePressed() {
	state = USER;
	drawing = [];
	path = [];
	time = 0;
	x = [];
	y = [];
}

function mouseReleased() {
	state = FOURIER;

	const skip = 1;
	for(let i = 0; i < drawing.length; i++) {
		x.push(drawing[i].x);
		y.push(drawing[i].y);
	}

	fourierY = dft(y);
	fourierX = dft(x);

	fourierX.sort((a, b) => b.amp - a.amp);
	fourierY.sort((a, b) => b.amp - a.amp);
}

function setup() {
	createCanvas(1000, 800);
	state = -1;
}

function draw() {
	background(255);
	if (state == USER) {
		let point = createVector(mouseX - width/2, mouseY - height/2);
		drawing.push(point);
		stroke(0);
		noFill();
		beginShape();
		for(let v of drawing) {
			vertex(v.x + width/2, v.y + height/2);
		}
		endShape();
	} else if(state == FOURIER) {
		let vx = drawFourier(width/2, 100, 0, fourierX);
		let vy = drawFourier(100, height/2, HALF_PI, fourierY);

		let v = createVector(vx.x, vy.y);

		path.unshift(v);

		line(vx.x, vx.y, v.x, v.y);
		line(vy.x, vy.y, v.x, v.y);

		beginShape();
		noFill();
		strokeWeight(3);
		stroke(0, 0, 255);
		for(let i = 0; i < path.length; i++) {
			vertex(path[i].x, path[i].y);
		}
		endShape();

		const dt = TWO_PI / fourierY.length;
		time += dt;

		if (time > TWO_PI) {
			time = 0;
			path = [];
		}

		// if(path.length >= 250)
		// 	path.pop();
	}
}

function drawFourier(x, y, rotation, fourier) {

	for(let i = 0; i < fourier.length; i++) {

		let prevx = x;
		let prevy = y;
		
		let freq = fourier[i].freq;
		let radius = fourier[i].amp;
		let phase = fourier[i].phase;
		x += radius * cos(freq * time + phase + rotation);
		y += radius * sin(freq * time + phase + rotation);

		stroke(0, 100);
		noFill();
		ellipse(prevx, prevy, radius * 2);

		stroke(0);
		line(prevx, prevy, x, y);
	}

	return createVector(x, y);
}

function dft(x) {
	const X = [];
	const N = x.length;
	for(let k = 0; k < N; k++) {
		let re = 0;
		let im = 0;

		for(let n = 0; n < N; n++) {
			const theta = (TWO_PI * k * n) / N;
			re += x[n] * cos(theta);
			im -= x[n] * sin(theta);
		}
		re = re / N;
		im = im / N;

		let freq = k;
		let amp = sqrt(re*re + im*im);
		let phase = atan2(im, re);

		X[k] = {re, im, freq, amp, phase};
	}
	return X;
}