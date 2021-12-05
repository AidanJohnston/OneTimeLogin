function checkLogin() {

    var username = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);

            // pwd and username match
            if (resonse) {

            }

            // Dislay incorrect pwd / username
            else {
                document.getElementById('incorrect').classList.remove('hide');
            }
		}

        else {
            document.getElementById('incorrect').classList.remove('hide');
        }
	};
	xmlhttp.open("POST", "php/login.php", username, pwd);
	xmlhttp.send();

    return false;
}
