var form = document.getElementById("form");


function fill(field) {	
	var fieldValue = field && field.value;

	if (fieldValue === ''){
		field.style.borderBottom = "5px solid red";
		document.getElementById("info").innerHTML = "Обратите внимание, что не все поля заявки заполнены.";
	}
	else {
		field.style.borderBottom = "5px solid rgba(0, 0, 0, 0.5)";
        document.getElementById("info").innerHTML =  "Спасибо, ваша заявка отправлена.";
	}
}


function validate(event) {
	event.preventDefault();
	var myName = document.getElementById("name");
	var myEmail = document.getElementById("email");
	var mySubject = document.getElementById("subject");
	var myMessage = document.getElementById("message");

	fill(myName);
	fill(myEmail);
	fill(mySubject);
	fill(myMessage);
}

form.addEventListener("submit", validate);







