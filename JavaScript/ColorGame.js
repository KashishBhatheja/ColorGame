var color= [];
var box=document.querySelectorAll(".square");
var display= document.querySelector("span");
var head= document.querySelector(".header");
var h2= document.querySelector("h2");
var btn= document.querySelector(".btn");
var easy=document.querySelector(".btn1");
var hard=document.querySelector(".btn2");

// random colors
color=[
random(),
random(),
random(),
random(),
random(),
random(),
];

// picking one of the color 
var picked= color[pick()];

h2.textContent=picked;

// EASY MODE
easy.addEventListener("click",easy1);

// HARD MODE
hard.addEventListener("click",hard1);

// NEW COLORS/PLAY AGAIN
btn.addEventListener("click",function(){
	if(easy.className=="btn1 active"){
		easy1();
	}else{
		hard1();
	}
});

// picking the correct color
for(var i=0; i<box.length; i++){
	box[i].style.background= color[i];
	box[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor);
		if(clickedColor == picked) {
			for(var i=0; i<box.length; i++){               
			box[i].style.background=picked;}
			display.textContent="CORRECT!!!";
			head.style.background=picked;
			btn.textContent="PLAY AGAIN??";
		} else {
			this.style.background = "#232323";
			display.textContent="TRY AGAIN!!!"
		}
	});
}

// Creating a random color
function random(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";	
}

// for selecting one of the random color
function pick(){
	var p= Math.floor(Math.random()*6);
	return p;
}

function picke(){
	var p= Math.floor(Math.random()*3);
	return p;
}

// function defined for hard mode
function hard1() {
	btn.textContent="New Colors";
	easy.classList.remove("active");
	hard.classList.add("active");
	color=[
	random(),
	random(),
	random(),
	random(),
	random(),
	random(),
	];
	display.textContent="";
	picked= color[pick()];
	h2.textContent=picked;
	for(var i=0; i<box.length; i++){
		box[i].style.display="block";
		box[i].style.background= color[i];
	}
	head.style.background= "#FE2E64";
}

// function defined for easy mode
function easy1() {
	btn.textContent="New Colors";
	hard.classList.remove("active");
	easy.classList.add("active");
	color=[
	random(),
	random(),
	random(),
	];
	display.textContent="";

	picked= color[picke()];
	h2.textContent=picked;
	for(var i=0; i<3; i++){
		box[i].style.background= color[i];
	}
	for(var i=3; i<6; i++){
		box[i].style.display="none";
	}
	head.style.background= "#FE2E64";
}