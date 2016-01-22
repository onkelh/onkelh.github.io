function redirect(){
	var phone = document.getElementById("password");
		if(password.value === "test") {
			window.location.href = "lockout.html";
		}
		else document.getElementById("error").style.display = "block";
}

document.getElementById("passwordButton").onclick = function() {
	redirect();
}