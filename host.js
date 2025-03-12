document.getElementById("host-registration").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for registering as a host! Our team will contact you soon.");
    this.reset();
});
