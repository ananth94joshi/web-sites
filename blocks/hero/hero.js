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

//h3 
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
