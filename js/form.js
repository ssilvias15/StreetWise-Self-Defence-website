/*alert("toto1");*/

var sendButton = document.getElementById("sendButton");
sendButton.onclick = sendForm;

function sendForm(){
    
    /* boolean value allowing to send the email if set to true */
    var correct = "true";
    /* patt : regular expression use to check that there is at least one 
    alpha-numerical character is the text entered by user*/
	var patt = /\w/;
	/* pattmail : regular expression checking the format of the email */
	var pattmail = /[\w-.]+@([\w-]+.)+[\w]{2,4}/; 
	
	/* Test if the name matches the regex, if not, it display the message 
	"enter your name" and set the boolean value correct to false */
    if (patt.test(document.getElementById("fname").value)) { 
		document.getElementById("wrongName").style.visibility = "hidden";
    }
	else {
		document.getElementById("wrongName").style.visibility = "visible";
		correct = "false";
	}
	
	/* Test if the email matches the regex, if not, it display the message 
	"enter a valid email" and set the boolean value correct to false */
    if (pattmail.test(document.getElementById("email").value)) { 
		document.getElementById("wrongEmail").style.visibility = "hidden";
    }
	else {
		document.getElementById("wrongEmail").style.visibility = "visible";
		correct = "false";
	}
	
	/* Test if the message matches the regex, if not, it display the message 
	"enter your message" and set the boolean value correct to false */
	if (patt.test(document.getElementById("message").value)) { 
		document.getElementById("wrongMsg").style.visibility = "hidden";
    }
	else {
		document.getElementById("wrongMsg").style.visibility = "visible";
		correct = "false";
	}
	
	if (correct == "true") {
		/* if the boolean value is true, it sends the email*/
		var x = document.getElementsByTagName("form");
		x[0].submit();// Form submission
	}
}


/* Message successfully sent. Thank you. */