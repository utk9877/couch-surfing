document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");

            const answer = this.querySelector("p");
            answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
        });
    });
});
