const productImages = {
    noir: [
      "../../images/produits/casquettes/112/noir-face.png",
      "../../images/produits/casquettes/112/noir-cote.jpg",
      "../../images/produits/casquettes/112/noir-dos.jpg"
    ],
    marine: [
      "../../images/produits/casquettes/112/marine-face.png",
      "../../images/produits/casquettes/112/marine-cote.jpg",
      "../../images/produits/casquettes/112/marine-dos.jpg"
    ],
    charbonblanc: [
      "../../images/produits/casquettes/112/charbonblanc-face.png",
      "../../images/produits/casquettes/112/charbonblanc-cote.jpg",
      "../../images/produits/casquettes/112/charbonblanc-dos.jpg"
    ],
    charbonnoir: [
      "../../images/produits/casquettes/112/charbonnoir-face.png",
      "../../images/produits/casquettes/112/charbonnoir-cote.jpg",
      "../../images/produits/casquettes/112/charbonnoir-dos.jpg"
    ],
    charbonrouge: [
      "../../images/produits/casquettes/112/charbonrouge-face.png",
      "../../images/produits/casquettes/112/charbonrouge-cote.jpg",
      "../../images/produits/casquettes/112/charbonrouge-dos.jpg"
    ],
    charbonroyal: [
      "../../images/produits/casquettes/112/charbonroyal-face.png",
      "../../images/produits/casquettes/112/charbonroyal-cote.jpg",
      "../../images/produits/casquettes/112/charbonroyal-dos.jpg"
    ],
    grisbleu: [
      "../../images/produits/casquettes/112/grisbleu-face.jpg",
      "../../images/produits/casquettes/112/grisbleu-cote.jpg",
      "../../images/produits/casquettes/112/grisbleu-dos.jpg"
    ],
    griscendreblanc: [
      "../../images/produits/casquettes/112/griscendreblanc-face.png",
      "../../images/produits/casquettes/112/griscendreblanc-cote.jpg",
      "../../images/produits/casquettes/112/griscendreblanc-dos.jpg"
    ],
    griscendremarine: [
      "../../images/produits/casquettes/112/griscendremarine-face.png",
      "../../images/produits/casquettes/112/griscendremarine-cote.jpg",
      "../../images/produits/casquettes/112/griscendremarine-dos.jpg"
    ],
    griscendrenoir: [
      "../../images/produits/casquettes/112/griscendrenoir-face.png",
      "../../images/produits/casquettes/112/griscendrenoir-cote.jpg",
      "../../images/produits/casquettes/112/griscendrenoir-dos.jpg"
    ],
    griscendreroyal: [
      "../../images/produits/casquettes/112/griscendreroyal-face.png",
      "../../images/produits/casquettes/112/griscendreroyal-cote.jpg",
      "../../images/produits/casquettes/112/griscendreroyal-dos.jpg"
    ],
    grischarbonnoir: [
      "../../images/produits/casquettes/112/grischarbonnoir-face.png",
      "../../images/produits/casquettes/112/grischarbonnoir-cote.jpg",
      "../../images/produits/casquettes/112/grischarbonnoir-dos.jpg"
    ],
    grisnoir: [
      "../../images/produits/casquettes/112/grisnoir-face.jpg",
      "../../images/produits/casquettes/112/grisnoir-cote.jpg",
      "../../images/produits/casquettes/112/grisnoir-dos.jpg"
    ],
    marineblanc: [
      "../../images/produits/casquettes/112/marineblanc-face.png",
      "../../images/produits/casquettes/112/marineblanc-cote.jpg",
      "../../images/produits/casquettes/112/marineblanc-dos.jpg"
    ],
    marineblancgris: [
      "../../images/produits/casquettes/112/marineblancgris-face.png",
      "../../images/produits/casquettes/112/marineblancgris-cote.jpg",
      "../../images/produits/casquettes/112/marineblancgris-dos.jpg"
    ],
    marronblanc: [
      "../../images/produits/casquettes/112/marronblanc-face.png",
      "../../images/produits/casquettes/112/marronblanc-cote.jpg",
      "../../images/produits/casquettes/112/marronblanc-dos.jpg"
    ],
    noirblanc: [
      "../../images/produits/casquettes/112/noirblanc-face.png",
      "../../images/produits/casquettes/112/noirblanc-cote.jpg",
      "../../images/produits/casquettes/112/noirblanc-dos.jpg"
    ],
    noircharcoal: [
      "../../images/produits/casquettes/112/noircharcoal-face.png",
      "../../images/produits/casquettes/112/noircharcoal-cote.jpg",
      "../../images/produits/casquettes/112/noircharcoal-dos.jpg"
    ],
    rougeblanc: [
      "../../images/produits/casquettes/112/rougeblanc-face.png",
      "../../images/produits/casquettes/112/rougeblanc-cote.jpg",
      "../../images/produits/casquettes/112/rougeblanc-dos.jpg"
    ],
    rougenoir: [
      "../../images/produits/casquettes/112/rougenoir-face.png",
      "../../images/produits/casquettes/112/rougenoir-cote.jpg",
      "../../images/produits/casquettes/112/rougenoir-dos.jpg"
    ],
    royalblanc: [
      "../../images/produits/casquettes/112/royalblanc-face.png",
      "../../images/produits/casquettes/112/royalblanc-cote.jpg",
      "../../images/produits/casquettes/112/royalblanc-dos.jpg"
    ],
    royalblancgris: [
      "../../images/produits/casquettes/112/royalblancgris-face.png",
      "../../images/produits/casquettes/112/royalblancgris-cote.jpg",
      "../../images/produits/casquettes/112/royalblancgris-dos.jpg"
    ]
  };

  const mainImage = document.getElementById("mainProductImage");
  const thumb1 = document.getElementById("thumb1");
  const thumb2 = document.getElementById("thumb2");
  const thumb3 = document.getElementById("thumb3");
  const colorButtons = document.querySelectorAll("#colorOptions .pill");
  const thumbButtons = document.querySelectorAll(".thumb");

  let currentColor = "noir";
  let currentImages = productImages[currentColor];

  function setActiveThumb(index) {
    thumbButtons.forEach((btn) => btn.classList.remove("active"));
    if (thumbButtons[index]) {
      thumbButtons[index].classList.add("active");
    }
  }

  function updateGallery(color) {
    if (!productImages[color]) return;

    currentColor = color;
    currentImages = productImages[color];

    if (mainImage) mainImage.src = currentImages[0];
    if (thumb1) thumb1.src = currentImages[0];
    if (thumb2) thumb2.src = currentImages[1];
    if (thumb3) thumb3.src = currentImages[2];

    setActiveThumb(0);
  }

  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      colorButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      updateGallery(button.dataset.color);
    });
  });

  thumbButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!currentImages[index]) return;
      if (mainImage) mainImage.src = currentImages[index];
      setActiveThumb(index);
    });
  });

  const qtyInput = document.getElementById("qtyInput");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");

  if (qtyMinus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      let value = parseInt(qtyInput.value, 10) || 1;
      if (value > 1) qtyInput.value = value - 1;
    });
  }

  if (qtyPlus && qtyInput) {
    qtyPlus.addEventListener("click", () => {
      let value = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = value + 1;
    });
  }

  updateGallery("noir");
</script>