document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".show-details-btn");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var projectDetails = this.nextElementSibling;
            if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
                projectDetails.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                projectDetails.style.display = "none";
                this.textContent = "Show Details";
            }
        });
    });
});
