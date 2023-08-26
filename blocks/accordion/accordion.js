export default function init(el) {
    const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
    titles.forEach((title) => {
      // Add a class to the title container
      title.classList.add('item-title');
      // Remove the empty div
      title.querySelector(':scope > div:last-of-type').remove();
      // Add a class to the content
      title.nextElementSibling.classList.add('item-content');
      // Add a click handler to open the content
      title.addEventListener('click', () => {
        title.classList.toggle('open');
      });
        // Select the source element
var sourceElement = document.querySelector("#non-consectetur-a-erat-nam-at-lectus-urna-duis");

// Select the target element
var targetElement = document.querySelector("body > main > div.section.accordion-container > div:nth-child(2) > div > div.item-title");

// Move the content from the source element to the target element
targetElement.appendChild(sourceElement);
    });
  }


