document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.querySelector(".like");
    const reacts = document.querySelector(".reacts");

    likeButton.addEventListener("mouseover", function() {
        reacts.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!likeButton.contains(event.target) && !reacts.contains(event.target)) {
            reacts.classList.remove("show");
        }
    });
});