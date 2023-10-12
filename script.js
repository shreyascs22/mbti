// Get references to all buttons and the box
const openButtons = document.querySelectorAll(".openButton");
const myBox = document.getElementById("myBox");
const closeButton = document.getElementById("closeButton");
const modalContent = document.getElementById("modalContent");

// Event listener to open the box for all buttons
openButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    myBox.style.display = "block";
    const content = button.getAttribute("data-content");
    modalContent.textContent = content;
  });
});

// Event listener to close the box
closeButton.addEventListener("click", function() {
  myBox.style.display = "none";
});
