function redirect(){
	var phone = document.getElementById("myInput");
		if(myInput.value === "11112222") {
			window.location.href = "enter-password.html";
		}
		if(myInput.value === "33334444") {
			window.location.href = "new-user.html";
		}
		else document.getElementById("error").style.display = "block";
}

document.getElementById("phoneButton").onclick = function() {
	redirect();
}