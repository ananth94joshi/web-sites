import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  
}
// Find the existing strong tag in hero for updating input
var strongTag = document.querySelector(".button-container strong");

if (strongTag) {
    // Check if the input element already exists within the strong tag
    var inputElement = strongTag.querySelector("input.enteryouremail");

    if (!inputElement) {
        // Create a new input element
        inputElement = document.createElement("input");
        inputElement.type = "email"; // Set input type to 'email'
        inputElement.placeholder = "Enter your email address"; // Set the placeholder text
        inputElement.className = "enteryouremail"; // Add a class to the input element

        // Add the input element to the existing strong tag
        strongTag.appendChild(inputElement);
    }
}
