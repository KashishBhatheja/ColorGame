var array=["kashish bhatheja"];   
var ans= prompt("What would you like to do?");
while(ans!=="quit"){
	if (ans==="list") {
		array.forEach(function(todo,i)
		{
			console.log(i+": "+todo);
		});
	}
	else if (ans==="new") {
		var todo=prompt("Enter new item");
		array.push(todo);

	}
	 ans= prompt("What would you like to do?");
}
console.log("thanks");