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

    // Get references to the edit and delete buttons, the main section, and the textarea within the new note element
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // Set the value of the textarea to the provided text, or an empty string if no text was provided
    textArea.value = text;

    // Set the innerHTML of the main section to the marked up text in the textarea
    main.innerHTML = marked(text);

    // Add an event listener to the delete button, which removes the note from the page and updates localStorage
    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });

    // Add an event listener to the edit button, which toggles the visibility of the main section and the textarea
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    // Add an event listener to the textarea, which updates the marked up text in the main section and updates localStorage on input
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
    });

    // Add the new note element to the body of the page
    document.body.appendChild(note);
}

// Function to update the notes in localStorage with the current values in the textareas
function updateLS() {
    // Get all the note textareas on the page
    const notesText = document.querySelectorAll("textarea");

    // Create an empty array to store the values of the note textareas
    const notes = [];

    // Loop through each note textarea and push its value to the notes array
    notesText.forEach((note) => notes.push(note.value));

    // Set the notes in localStorage as a JSON string
    localStorage.setItem("notes", JSON.stringify(notes));
}