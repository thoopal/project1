
 
var canvas= document.getElementById("c1");

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var speedTarget = prompt ("Enter target speed 1 to 5")
var speedArrow = prompt ("Enter arrow speed 1 to 5")

// coordinates for target//
var x = 700;
var y = 500;
var radius = 0;
var dy = parseInt(speedTarget);
// coordinates for arrow//
var a = 0;
var b = 300;
var d = 0;
var e = 300;
var ax = parseInt(speedArrow);
var bx;

//attributes
var life = 5;
var score = 0;

	

c.font = "30px Lobster"

var shot = function() {
	// if (arrow){
			c.beginPath();
			c.moveTo(a , b);
			c.lineTo(a + 50 , b);
			c.stroke();
			a += ax; 	
		// }	
	}

var shot1 = function() {
	// if (arrow){
			c.beginPath();
			c.moveTo(d , e);
			c.lineTo(d + 50 , e+12.5);
			c.stroke();
			d += ax; e += 0.25*ax;	
		// }	
	}




// Animate//

function animate() {
	requestAnimationFrame(animate);
	// create target//

		c.clearRect(0, 0, innerWidth, innerHeight);
		c.beginPath();
		c.arc(x , y, radius +50, 0, Math.PI*2, false);
		c.fillStyle = "red";
		if (y + 50> innerHeight || y-50 < 0) {
			dy = -dy;
		}
		y += dy;
		c.strokeStyle = "red";
		c.fillStyle = "red";
		c.fill();
		c.stroke();

	//Create Bow 
		c.beginPath();
		c.arc( 5 , 300, 40, 0, Math.PI*2, false );
		c.stroke();

	//create arrow//
		if (arrow) {
			shot();
		}
		else if (arrow1) {
			shot1();
		}



	//Add to score and life counters//
		if ((x - a == 0 && 350>= y && y>= 250) || 
			(x - d == 0 && 400>= y && y>=800))
			{
			score += 1;
			a = 0;
			d = 0;
			e = 300;
			arrow = false;
			arrow1 = false;
			

		}else if (x -a== -100 || x- d == -100){
			life -= 1;
			a = 0;
			d = 0;
			e = 300;
			arrow = false;
			arrow1 = false;
	
		}	

	//Update score and life
		c.fillText("Score :", 450, 50);
		c.fillText("Life :", 650, 50);
		c.fillText(score, 550, 50);
		c.fillText(life, 750, 50);

		if (life == 0) {
			alert ("You are dead!");

		}

}

//eventlistener to release arrow
let arrow=false;
document.addEventListener('keydown', function() {
	console.log('apple')
	arrow=true;	
	var twang =new Audio();
	twang.src = "arrow.mp3"
	twang.play();
},false)
	
//eventlistener to release arrow
let arrow1=false;
canvas.addEventListener('click', function() {
	arrow1=true;	
	var twang =new Audio();
	twang.src = "arrow.mp3"
	twang.play();
},false)

animate();





		// c.arc(x , y, radius +10, 0, Math.PI*2, false);
		// c.arc(x , y, radius +20, 0, Math.PI*2, false);
		// c.arc(x , y, radius +30, 0, Math.PI*2, false);
		// c.arc(x , y, radius +40, 0, Math.PI*2, false);


