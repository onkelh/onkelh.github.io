function redirect(){
	var password = document.getElementById("myInput");
		if(myInput.value === "test") {
			window.location.href = "http://www.tb.no/tonsberg/nyheter/brann/seks-bedrifter-klager-pa-politiets-henleggelse/s/5-76-245765";
		}
		else window.location.href = "lockout.html";
}

document.getElementById("submitPassword").onclick = function() {
	redirect();
}