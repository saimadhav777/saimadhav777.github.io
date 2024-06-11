document.addEventListener("DOMContentLoaded", function() {
    // Menu item active state toggling
    const menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menuItems.forEach(menu => menu.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Hover effect for course cards
    const courseCards = document.querySelectorAll(".course-card");
    
    courseCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    // Additional JavaScript functionalities can be added here
    // For example, you can add event listeners for buttons in the achievement cards
    const achievementButtons = document.querySelectorAll(".achievement-card button");
    
    achievementButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Viewing achievement details...");
        });
    });

    // If there's a need to handle specific interactions within the schedule or tasks section,
    // additional event listeners can be added here
});
