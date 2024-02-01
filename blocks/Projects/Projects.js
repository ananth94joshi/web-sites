const counterElements = document.querySelectorAll(".projects");

       

        let count = 0;

        const targetCount = 521;

       

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
