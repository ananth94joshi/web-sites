//scripts for adding class
// Select the element using querySelector
const targetDiv = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)");

// Add a class to the selected div
targetDiv.classList.add("counter");

const counterElements = document.querySelectorAll(".counter");
        let count = 0;

        const targetCount = 200;

       

        const interval = setInterval(() => {

            if (count <= targetCount) {

                counterElements.forEach(element => {

                    element.textContent = count;

                });

                count++;

            } else {

                clearInterval(interval);

            }

        }, 50); // Adjust the interval as needed

