let time = 0;
let wave = [];

function setup() {
	createCanvas(1000, 800);
}

function draw() {
	background(255);
	translate(150, 300);
	
	let x = 0;
	let y = 0;
	for(let i = 0; i < 40; i++) {

		let prevx = x;
		let prevy = y;
		let  n = 2 * i + 1;
		let radius = 70 * (4 / (n * PI));
		x += radius * cos(n * time);
		y += radius * sin(n * time);

		stroke(255, 0, 0, 90);
		noFill();
		ellipse(prevx, prevy, radius * 2);

		fill(255, 0, 0);
		line(prevx, prevy, x, y);
		ellipse(x, y, 0);

	}
	wave.unshift(y);


	translate(100, 0);
	stroke(100, 100, 100);
	line(x - 100, y, 0, wave[0]);
	beginShape();
	noFill();
	stroke(0, 0, 255);
	for(let i = 0; i < wave.length; i++) {
		vertex(i, wave[i]);
	}
	endShape();
	if(wave.length >= 250)
		wave.pop();
	time += 0.01;
}