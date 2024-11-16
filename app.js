// Get the add button element from the DOM
const addBtn = document.getElementById("add");

// Get notes from localStorage and parse the JSON data if it exists
const notes = JSON.parse(localStorage.getItem("notes"));

// If notes exist in localStorage, loop through each note and add it to the page
if (notes) {
    notes.forEach((note) => addNewNote(note));
}

// Add event listener to the add button, which creates a new note on click
addBtn.addEventListener("click", () => addNewNote());

// Function to add a new note to the page (will get hoisted, arrow functions can't get hoisted)
function addNewNote(text = "") {

    // Create a new note element
    const note = document.createElement("div");

    // Add the 'note' class to the new note element
    note.classList.add("note");

    // Set the innerHTML of the new note element with HTML for a note with tools, a main section, and a textarea
    note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  // ... TODO
}

// Function to update the notes in localStorage with the current values in the textareas
function updateLS() {
    // stub
}