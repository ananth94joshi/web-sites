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
    //counter logic

// Function to create a counter animation for a given target div and count
function animateCounter(targetSelector, targetCount) {
    const targetDiv = document.querySelector(targetSelector);
    targetDiv.classList.add("counter");
    const counterElements = document.querySelectorAll(targetSelector);
    let count = 0;

    const counterInterval = setInterval(() => {
        if (count <= targetCount) {
            counterElements.forEach(element => {
                element.textContent = count;
            });
            count++;
        } else {
            clearInterval(counterInterval);
        }
    }, 50); // Adjust the interval as needed

    // Worker counter animation
    const workerTargetSelector = targetSelector.replace("div:nth-child(4)", "div:nth-child(5)");
    const workerTargetDiv = document.querySelector(workerTargetSelector);
    workerTargetDiv.classList.add("worker");
    const workerCounterElements = document.querySelectorAll(workerTargetSelector);
    let workerCount = 0;
    const workerTargetCount = 32; // Updated worker count

    const workerInterval = setInterval(() => {
        if (workerCount <= workerTargetCount) {
            workerCounterElements.forEach(element => {
                element.textContent = workerCount;
            });
            workerCount++;
        } else {
            clearInterval(workerInterval);
        }
    }, 50); // Adjust the interval as needed
}

// Create counter animation for counters
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)", 232);

// Create counter animation for projects
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(2)", 521);

// Create counter animation for support
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(3)", 1453); // Updated support count

// Create counter animation for worker
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(4)", 32); // Updated worker count

}
