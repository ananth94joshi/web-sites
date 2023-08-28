export default function init(el) {
    const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
    titles.forEach((title) => {
      // Add a class to the title container
      title.classList.add('item-title');
      // Remove the empty div
     // title.querySelector(':scope > div:last-of-type').remove();
      // Add a class to the content
      title.nextElementSibling.classList.add('item-content');
      // Add a click handler to open the content
      title.addEventListener('click', () => {
        title.classList.toggle('open');
      });
        // Select the source element

    });
    //accordion
var activeAccordion = document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title');
if(activeAccordion !== null)
    document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title').classList.add('open');

  }


