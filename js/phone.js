import QrScanner from "./qr-scanner.min.js";
QrScanner.WORKER_PATH = "../js/qr-scanner-worker.min.js";

window.onload = function() {
    var videoElem = document.getElementById('qrscannervideo')
    const qrScanner = new QrScanner(videoElem, result => handleCode(result));

    qrScanner.start();
}

function handleCode(result) {
    
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "../php/phone.php", true);

	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
           
            var response = this.responseText;

            if (response) {
                console.log(this.response)
            }
		}
	};
	xmlhttp.send('qr='+result);
}