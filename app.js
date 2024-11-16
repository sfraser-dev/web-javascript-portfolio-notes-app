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
    // stub
}

// Function to update the notes in localStorage with the current values in the textareas
function updateLS() {
    // stub
}