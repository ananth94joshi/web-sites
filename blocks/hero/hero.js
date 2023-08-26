// Get the elements
const elementToMove = document.querySelector("body > main > div:nth-child(2) > div");
const insertionPoint = document.querySelector("#welcome-to-our-website");

// Check if both elements exist
if (elementToMove && insertionPoint) {
  // Insert the element after the insertion point
  insertionPoint.insertAdjacentElement('afterend', elementToMove);
} else {
  console.log("One or both elements not found.");
}
const targetElement = document.querySelector("body > main > div:nth-child(2)");

if (targetElement) {
  targetElement.style.display = "none";
} else {
  console.log("Element not found.");
}
