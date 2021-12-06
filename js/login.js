function generateQR() {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
           
            response = this.responseText;

            if (response) {
                result = document.getElementById('qr');
                result.innerHTML = '<img src="data:image/png;base64,' + this.responseText + '"/>';
            }
		}
	};
	xmlhttp.open("POST", "php/GenerateQR.php", true);
	xmlhttp.send();
}

function displaySignUp() {
    var logins = document.getElementsByClassName('login');
    for (var i = 0; i < logins.length; i++) {
        logins[i].classList.add('hide');
    }

    document.getElementById('newUser').classList.remove('hide');
    return false;
}

function displaySignIn() {
	var logins = document.getElementsByClassName('login');
    for (var i = 0; i < logins.length; i++) {
        logins[i].classList.add('hide');
    }

    document.getElementById('signIn').classList.remove('hide');
    return false;
}

window.onload = generateQR;