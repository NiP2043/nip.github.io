function sendOTP() {
  alert("OTP Sent! (Use 1234 to login)");
  document.getElementById("otp-section").style.display = "block";
}

function verifyOTP() {
  let otp = document.getElementById("otp").value;
  if (otp === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Invalid OTP. Try again.");
  }
}
