function redirect(){
	var password = document.getElementById("myInput");
		if(myInput.value === "ABC123") {
			window.location.href = "create-password.html";
		}
		else document.getElementById("vis-hidden").style.display = "block";
		document.getElementById("message").style.display = "none";
}

document.getElementById("submitToken").onclick = function() {
	redirect();
}