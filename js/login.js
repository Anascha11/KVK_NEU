// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
modal = window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var attempt = 4; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var benutzername = document.getElementById("benutzername").value;
  var passwort = document.getElementById("passwort").value;
  if (benutzername == "Mitglied" && passwort == "Gri3W3g:!2025") {
    alert("Login erfolgreich");
    window.location = "mitgliederbereich.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("Login fehlgeschlagen. Du hast noch " + attempt + " Versuche;");
    window.location = "index.html"; // Redirecting to index.
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("benutzername").disabled = true;
      document.getElementById("passwort").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
