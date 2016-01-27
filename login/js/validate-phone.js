function redirect(){
	var phoneFormat = 8;
	var phone = document.getElementById("myInput");
		if(phone.value.length === phoneFormat) {
			window.location.href = "enter-password.html";
		}
		if(phone.value === "11223344") {
			window.location.href = "new-user.html";
		}
		else {
			document.getElementById("vis-hidden").style.display = "block";
		}
}

document.getElementById("submitPhone").onclick = function() {
	redirect();
}