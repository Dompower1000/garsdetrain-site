// Galerie produit
const mainProductImage = document.getElementById("mainProductImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newImage = thumb.getAttribute("data-image");
    if (mainProductImage && newImage) {
      mainProductImage.src = newImage;
    }

    thumbs.forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Sélection boutons options
const optionGroups = document.querySelectorAll(".pill-options");

optionGroups.forEach((group) => {
  const pills = group.querySelectorAll(".pill");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((item) => item.classList.remove("active"));
      pill.classList.add("active");
    });
  });
});

// Quantité
const qtyInput = document.getElementById("qtyInput");
const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");

if (qtyMinus && qtyInput) {
  qtyMinus.addEventListener("click", () => {
    let value = parseInt(qtyInput.value, 10) || 1;
    if (value > 1) {
      qtyInput.value = value - 1;
    }
  });
}

if (qtyPlus && qtyInput) {
  qtyPlus.addEventListener("click", () => {
    let value = parseInt(qtyInput.value, 10) || 1;
    qtyInput.value = value + 1;
  });
}