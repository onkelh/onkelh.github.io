function redirect(){
	var password = document.getElementById("myInput");
		if(myInput.value === "test") {
			window.location.href = "http://www.dt.no";
		}
		else window.location.href = "pw-attempt-2.html";
}

document.getElementById("passwordButton").onclick = function() {
	redirect();
}