// export default function init(el) {
//     const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
//     titles.forEach((title) => {
//       // Add a class to the title container
//       title.classList.add('item-title');
//       // Remove the empty div
//       title.querySelector(':scope > div:last-of-type').remove();
//       // Add a class to the content
//       title.nextElementSibling.classList.add('item-content');
//       // Add a click handler to open the content
//       title.addEventListener('click', () => {
//         title.classList.toggle('open');
//       });
//     });
//   }

export default function init(el) {
  const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title) => {
    // Create a title element
    const titleElement = document.createElement('div');
    titleElement.textContent = 'Click to expand'; // You can set the desired title text
    titleElement.classList.add('item-title');
    title.insertBefore(titleElement, title.firstChild); // Insert the title element at the beginning

    // Remove the empty div
    title.querySelector(':scope > div:last-of-type').remove();

    // Add a class to the content
    title.nextElementSibling.classList.add('item-content');

    // Add a click handler to open the content
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}
