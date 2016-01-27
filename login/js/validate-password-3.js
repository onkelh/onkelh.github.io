function redirect(){
	var password = document.getElementById("myInput");
		if(myInput.value === "test") {
			window.location.href = "http://www.dt.no";
		}
		else window.location.href = "lockout.html";
}

document.getElementById("submitPassword").onclick = function() {
	redirect();
}