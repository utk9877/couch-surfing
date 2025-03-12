document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-input").value.trim();
        if (searchQuery === "") {
            alert("Please enter a location.");
        } else {
            alert("Searching for stays in " + searchQuery);
        }
    });

    const featuredGrid = document.querySelector(".featured-grid");

    function addMoreFeatured() {
        featuredData.forEach(stay => {
            let card = document.createElement("div");
            card.classList.add("featured-card");
            card.innerHTML = `
                <img src="${stay.img}" alt="${stay.title}">
                <h3>${stay.title}</h3>
                <p>${stay.desc}</p>
            `;
            featuredGrid.appendChild(card);
        });
    }

    setTimeout(addMoreFeatured, 3000);
});
