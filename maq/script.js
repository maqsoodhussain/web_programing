// script.js

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");

            // Filter cards
            cards.forEach(card => {
                if (filter === "all") {
                    card.style.display = "block";
                } else {
                    if (card.getAttribute("data-category").includes(filter)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
});
