
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".blog_card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 300); // one-by-one
  });
});

