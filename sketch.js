let angle = 0;

function setup() {
	createCanvas(400, 300, WEBGL);
}

function draw() {
	background(230);

	let camX = map(mouseX, 0, width, -200, 200);
	camera(camX, 0, ((height/2) / tan(PI/6)), camX, 0, 0, 0, 1, 0);

	ambientLight(255);

	push(); // Start a new drawing state
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	
	noStroke();
	normalMaterial();
	box(100);
	pop(); // Restore previous state

	translate(0, 100);
	rotateX(HALF_PI);
	ambientMaterial(255);
	noStroke();
	fill(219, 121, 160)
	plane(500, 500);

	angle += 0.03;
}