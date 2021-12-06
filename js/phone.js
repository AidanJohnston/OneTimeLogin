import QrScanner from "./qr-scanner.min.js";
QrScanner.WORKER_PATH = "../js/qr-scanner-worker.min.js";
var videoElem = document.getElementById('qrscannervideo')
const qrScanner = new QrScanner(videoElem, result => handleCode(result));

window.onload = function() {
    qrScanner.start();
}

function handleCode(result) {
    qrScanner.stop();

    var file = document.getElementById("file");

    var fd = new FormData();
    fd.append('file', file.files[0]);
    fd.append('qr', result);
    
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "../php/phone.php", true);
    //xmlhttp.setRequestHeader("Content-Type", "multipart/form-data");
	xmlhttp.onreadystatechange = function () {
		//If Request successful
		if (this.readyState == 4 && this.status == 200) {
            // pwd and username match
            var response = JSON.parse(this.responseText);
            console.log(response);
            if (response['errorcode'] == '0') {
                var code = document.getElementById('code');
                code.innerHTML = "<p>" + response['code'] + "</p>";

                document.getElementById('scanner_container').classList.add("hide");
                document.getElementById('password_header').classList.add("hide");
                document.getElementById('code_header').classList.remove("hide");
                
            }

            if (response['errorcode'] == '1') {
                document.getElementById('incorrect').classList.remove("hide");
                document.getElementById('incorrect').innerHTML = 'QR code found but not recognized.';
            }
            if (response['errorcode'] == '2') {
                document.getElementById('incorrect').classList.remove("hide");
                document.getElementById('incorrect').innerHTML = 'No token added.';
            }
            if (response['errorcode'] == '3') {
                document.getElementById('incorrect').classList.remove("hide");
                document.getElementById('incorrect').innerHTML = 'Bad QR code or token.';
            }
		}
        else {
            qrScanner.start();
        }
	};

	xmlhttp.send(fd);
}