function updateDateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.innerText = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

