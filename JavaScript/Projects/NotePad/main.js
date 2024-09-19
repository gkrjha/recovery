const editor = document.getElementById('editor');
const newFileButton = document.getElementById('newFileButton');
const openFileButton = document.getElementById('openFileButton');
const saveFileButton = document.getElementById('saveFileButton');
const fileInput = document.getElementById('fileInput');

// Function to clear the editor for a new file
function newFile() {
    if (confirm("Are you sure you want to create a new file? Unsaved changes will be lost.")) {
        editor.value = '';
    }
}

// Function to open a file
function openFile() {
    fileInput.click();
}

// Function to save the current content to a file
function saveFile() {
    const text = editor.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notepad.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to handle file input change event
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            editor.value = e.target.result;
        };
        reader.readAsText(file);
    }
});

// Event listeners for buttons
newFileButton.addEventListener('click', newFile);
openFileButton.addEventListener('click', openFile);
saveFileButton.addEventListener('click', saveFile);
