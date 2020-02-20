var robo = {
	x : 100,
	y : 300
};
var leg = {
	right : 20,
	left : -20
};

colorX = 150;
colorY = 200;

var flag = 1;

function setup() {
	createCanvas(1000, 500);
}

function draw() {
	background(190);
	//Draw Robo Body
	fill(colorX, colorY, colorX+colorY/2);
	ellipse(robo.x, robo.y, 50, 50);
	ellipse(robo.x+5, robo.y-3, 20, 30);
	fill(colorY, colorX+colorY/2, colorX);
	rect(robo.x-25, robo.y+25, 50, 75);

	//Draw Robo Legs
	fill(0);
	line(robo.x+10, robo.y+90, robo.x+leg.right, robo.y+130);
	line(robo.x-10, robo.y+90, robo.x+leg.left, robo.y+130);

	//Movement
	if(robo.x < 500)
		robo.x += 1;

	//Death
	if(robo.x >= 500 || flag == 2) {
		fill(250, 0, 0);
		ellipse(robo.x, robo.y-50, 100, 100);
		robo.y += 5;
		colorX = random(0, 255);
		colorY = random(0, 255);
	}

	//Leg Animation
	if(flag == 1 &&  robo.x%25 == 0) {
		leg.right = 10;
		leg.left = -10;
		flag = 0;
		colorX = random(0, 255);
		colorY = random(0, 255);
	} else if(flag == 0 && robo.x%50 == 0) {
		leg.right = 20;
		leg.left = -20;
		flag = 1;
	}
}

//Initiate Death or Revival
function mousePressed() {
	if (flag == 2) {
		robo.x = 100;
		robo.y = 300;
		flag = 1;
	} else
		flag = 2;
}

