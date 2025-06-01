function toggleProjectDetails() {
  const details = document.getElementById("projectDetails");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard!");
  });
}