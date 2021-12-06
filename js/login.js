function generateQR() {

	var xmlhttp = new XMLHttpRequest();
    console.log("QR");
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

window.onload = generateQR;