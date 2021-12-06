function generateQR() {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
           
            var response = JSON.parse(this.responseText);
            localStorage.setItem('qr', response['uid']);

            if (response) {
                result = document.getElementById('qr');
                result.innerHTML = '<img src="data:image/png;base64,' + response['file'] + '"/>';
            }
		}
	};
	xmlhttp.open("POST", "php/GenerateQR.php", true);
	xmlhttp.send();
}

function signIn() {
    document.getElementById('incorrect').classList.add('hide');

    var code = document.getElementById('password').value;

    console.log(code);
    console.log(localStorage.getItem('qr'));

    var fd = new FormData();
    fd.append('uid', localStorage.getItem('qr'));
    fd.append('code', code);

    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
            var response = JSON.parse(this.responseText);

            if (response['errorcode'] == '0') {
                localStorage.setItem('uid', response['uid']);
                window.location.href = 'pages/Login_Success';
            }
            else {
                document.getElementById('incorrect').classList.remove('hide');
                generateQR();
                document.getElementById('password').value = '';
            }
		}
	};
	xmlhttp.open("POST", "php/login.php", true);
	xmlhttp.send(fd);

    return false;
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