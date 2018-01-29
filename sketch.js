let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;

let n1 = 3;
let n2 = 1;
let n3 = 1;
let m1 = 4;
let m2 = 6;
let phi;
let scale;
let a = 1;
let b = 1;
function setup() {
	createCanvas(500, 500);

	slider1 = createSlider(0, 10, 0.1, 0.01);
	slider2 = createSlider(0, 10, 0.1, 0.01);
	slider3 = createSlider(0, 10, 0.1, 0.01);

}

function draw() {
	background(51);
	stroke(255);
	translate(width/2, height/2);
	noFill();
	let scale = 100;
	n1 = slider1.value();
	m1 = slider2.value();
	m2 = slider3.value();
	beginShape();
	for (let phi = -2*PI; phi <= 2*PI; phi+= PI/20){
		let part1 = pow(abs(cos(m1*phi/4)/a), n2);
		let part2 = pow(abs(sin(m2*phi/4)/b), n3);
		let r = pow((part1 + part2), -1 / n1);
		let x = scale*r* cos(phi);
		let y = scale*r * sin(phi);
	  vertex(x,y);
	 }
	endShape();
}

function sgn(x){
	return x/abs(x);
}
