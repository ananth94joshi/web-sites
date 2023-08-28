export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);


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
document.addEventListener("DOMContentLoaded", function() {
    // Your animateCounter function calls here
    animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)", 232);
    animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(2)", 521);
    animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(3)", 1453);
    animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(4)", 32);
});
}
