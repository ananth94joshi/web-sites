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

// Create counter animation for counters
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)", 232);

// Create counter animation for projects
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(2)", 521);

// Create counter animation for support
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(3)", 1453); // Updated support count

// Create counter animation for worker
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(4)", 32); // Updated worker count
}

//to move the H3 tag
// Select the elements
var clientsElement = document.querySelector("#clients");
var projectElement = document.querySelector("#project");
var supportElement = document.querySelector("#hours-of-support");
var workersElement = document.querySelector("#workers");
var clientsTarget = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div.client.counter.worker");
var projectTarget = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div.project.counter.worker");
var supportTarget = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div.support.counter.worker");
var workersTarget = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div.workers.counter");

 

// Check if all elements and targets are valid
if (clientsElement && projectElement && supportElement && workersElement && clientsTarget && projectTarget && supportTarget && workersTarget) {
    // Move the #clients element
    clientsElement.parentNode.removeChild(clientsElement);
    clientsTarget.parentNode.insertBefore(clientsElement, clientsTarget.nextSibling);

 

    // Move the #project element
    projectElement.parentNode.removeChild(projectElement);
    projectTarget.parentNode.insertBefore(projectElement, projectTarget.nextSibling);

 

    // Move the #hours-of-support element
    supportElement.parentNode.removeChild(supportElement);
    supportTarget.parentNode.insertBefore(supportElement, supportTarget.nextSibling);

 

    // Move the #workers element
    workersElement.parentNode.removeChild(workersElement);
    workersTarget.parentNode.insertBefore(workersElement, workersTarget.nextSibling);
} else {
    console.log("One or more elements/targets not found.");
}


