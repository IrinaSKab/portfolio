var form = document.getElementById("form");

function validate(event) {
	event.preventDefault();
	var myName = document.getElementById("name");
	var myNameValue = myName && myName.value;

	var myEmail = document.getElementById("email");
	var myEmailValue = myEmail && myEmail.value;

	var mySubject = document.getElementById("subject");
	var mySubjectValue = mySubject && mySubject.value;

	var myMessage = document.getElementById("message");
	var myMessageValue = myMessage && myMessage.value;  

	function fill() {	
		if ((myNameValue === '') & (myEmailValue === '') & (mySubjectValue === '') & (myMessageValue === '')) {
			(myName.style.border= "5px solid red") & (Bottom&myName.style.borderBottom = "5px solid red") & (mySubject.style.borderBottom= "5px solid red") & (myMessage.style.borderBottom = "5px solid red");
		}
		else {
			(myName.style.borderBottom = "5px solid rgba(0, 0, 0, 0.5)") & (myName.style.borderBottom = "5px solid rgba(0, 0, 0, 0.5)") & (mySubject.style.borderBottom = "5px solid rgba(0, 0, 0, 0.5)") & (myMessage.style.borderBottom = "5px solid rgba(0, 0, 0, 0.5)");   
		}
	}
	form.addEventListener("submit", fill);
}	
form.addEventListener("submit", validate);






