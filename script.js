const pw = document.getElementById("password");
const pwConf = document.getElementById("confirm");

pwConf.oninput = function () {
	checkMatch();
};

function checkMatch() {
	if (pw.value !== pwConf.value) {
		// Add 'invalid' class if not already present
		if (!pw.classList.contains("invalid")) {
			pw.classList.add("invalid");
		}
		if (!pwConf.classList.contains("invalid")) {
			pwConf.classList.add("invalid");
		}
	} else {
		// Remove 'invalid' class if present
		if (pw.classList.contains("invalid")) {
			pw.classList.remove("invalid");
		}
		if (pwConf.classList.contains("invalid")) {
			pwConf.classList.remove("invalid");
		}
	}
}
