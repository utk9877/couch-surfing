document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky Header
    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.9)";
            header.style.boxShadow = "none";
        }
    });
});
