function redirect(){
	var password = document.getElementById("myInput");
	var possibleTokens = ["HEST 89", "hest 89", "hest89"];
	console.log(possibleTokens.indexOf(myInput.value) > -1);

		if(myInput.value === "hest 89") {
			window.location.href = "create-password.html";
		}
		else document.getElementById("vis-hidden").style.display = "block";
		document.getElementById("message").style.display = "none";
}

document.getElementById("submitToken").onclick = function() {
	redirect();
}