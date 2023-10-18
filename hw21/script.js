document.addEventListener('DOMContentLoaded', () => {
  loadNote();

  document.querySelector('.save-note').addEventListener('click', saveNote);
  document.querySelector('.delete-note').addEventListener('click', deleteNote);
});

function saveNote() {
  const noteInput = document.querySelector(".note");
  const currentDate = new Date();

  localStorage.setItem("noteContent", noteInput.value);
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  localStorage.setItem("noteDate", formattedDate);
  document.querySelector(".info-note").textContent = `Редаговано: ${formattedDate}`;
}

function loadNote() {
  const savedNote = localStorage.getItem("noteContent");
  if (savedNote) {
    document.querySelector(".note").value = savedNote;
  }

  const savedDate = localStorage.getItem("noteDate");
  if (savedDate) {
    document.querySelector(".info-note").textContent = `Редаговано: ${savedDate}`;
  }
}

function deleteNote() {
  localStorage.removeItem("noteContent");
  localStorage.removeItem("noteDate");

  document.querySelector(".note").value = '';
  document.querySelector(".info-note").textContent = '';
}
