import QrScanner from "./qr-scanner.min.js";
QrScanner.WORKER_PATH = "../js/qr-scanner-worker.min.js";
var videoElem = document.getElementById('qrscannervideo')
const qrScanner = new QrScanner(videoElem, result => handleCode(result));

window.onload = function() {
    qrScanner.start();
}

function handleCode(result) {
    qrScanner.stop();
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "../php/phone.php", true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
           
            var response = this.responseText;

            if (response) {
                var code = document.getElementById('code');
                code.innerHTML = "<p>" + response + "</p>";
                
            }
		}
        else {
            qrScanner.start();
        }
	};
	xmlhttp.send('qr='+result);
}