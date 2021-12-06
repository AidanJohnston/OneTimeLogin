window.onload = function() {
    var fd = new FormData();
    fd.append('uid', localStorage.getItem('uid'));

    console.log(localStorage.getItem('uid'));

    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
            var response = JSON.parse(this.responseText);

            console.log(response);

            if (response['errorcode'] == '0') {
                document.getElementById('success').innerHTML = "<h2>"+ response['username'] + " you have been successfully logged in!</h2>"
            }
		}
	};
	xmlhttp.open("POST", "../php/getUsername.php", true);
	xmlhttp.send(fd);

    return false;
}