var fact=1;
function factorial(x) {
	while(x>0){
		fact=x*fact;
		x--;
	}
	return fact;
}