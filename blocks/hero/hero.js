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
$(document).ready(function() {
  function videoload() {
    var videoContainer = $(".hero div div");

    // Log the selected container to the console
    console.log("Video container:", videoContainer);

    // Remove existing elements inside the container
    videoContainer.empty();

    // Append the video element with the correct attributes
    videoContainer.append("<video width='100%' height='100%' style='position: absolute; top: 0; left: 0;' autoplay controls src='https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'></video>");

    // Log a message to indicate that the video has been appended
    console.log("Video appended successfully");
  }

  // Call your function
  videoload();
});

