document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalCarouselItems = carouselItems.length;
    let currentIndex = 0;

    function showCarouselItems(startIndex) {
        carouselItems.forEach(item => {
            item.style.display = "none";
        });

        for (let i = 0; i < 2; i++) { 
            const indexToShow = (startIndex + i) % totalCarouselItems;
            carouselItems[indexToShow].style.display = "block";
        }
    }

    function proxCarouselItems() {
        currentIndex = (currentIndex + 2) % totalCarouselItems; 
        showCarouselItems(currentIndex);
    }

    function antCarouselItems() {
        currentIndex = (currentIndex - 2 + totalCarouselItems) % totalCarouselItems; // Retrocede dois itens por vez
        showCarouselItems(currentIndex);
    }

    showCarouselItems(currentIndex);

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#9654;";
    nextButton.classList.add("carousel-control-prox");
    nextButton.addEventListener("click", proxCarouselItems);

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#9664;";
    nextButton.classList.add("carousel-control-ant");
    prevButton.addEventListener("click", antCarouselItems);

    const carouselContainer = document.querySelector(".carousel");
    const carouselControls = document.createElement("div");
    carouselControls.classList.add("carousel-controls");
    carouselControls.appendChild(prevButton);
    carouselControls.appendChild(nextButton);
    carouselContainer.appendChild(carouselControls);

    /* const nextButton = document.createElement("button");
    nextButton.textContent = "Próximo";
    nextButton.addEventListener("click", proxCarouselItems);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", antCarouselItems);

    const carouselContainer = document.querySelector(".carousel");
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton); */
});
