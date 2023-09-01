@@ -1,24 +1 @@
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

// Select the elements for h3 	
var clientsElement = document.querySelector("#clients");	
var targetElement = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div.client.counter.worker");	
// Check if both elements are valid	
if (clientsElement && targetElement) {	
    // Remove the #clients element from its current position	
    clientsElement.parentNode.removeChild(clientsElement);	
    // Insert the #clients element below the target element	
    targetElement.parentNode.insertBefore(clientsElement, targetElement.nextSibling);	
} else {	
    console.log("One or both elements not found.");	
}
