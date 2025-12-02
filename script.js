// Simple hover logging (optional demo)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log("Hovered:", card.querySelector("h2").textContent);
    });
});

