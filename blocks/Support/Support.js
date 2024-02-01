const counterElements = document.querySelectorAll(".support");

       

        let count = 0;

        const targetCount = 1453;

       

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
