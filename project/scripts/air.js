const planes = [
  {
    name: "Sopwith Camel",
    date: "1917",
    summary: "One of the most famous British fighter aircraft of WWI, known for its agility and combat success.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sopwith_Camel_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg",
    innovations: [
      "Highly maneuverable biplane design influenced aerobatic aircraft",
      "Synchronized machine gun firing system improved modern aviation weapon safety systems",
      "Lightweight frame principles used in modern sport aircraft"
    ]
  },
  {
    name: "Fokker Dr.I Triplane",
    date: "1917",
    summary: "A German fighter aircraft famously flown by the Red Baron, known for its three-wing design.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fokker_DR1_at_Airpower11_18.jpg/1920px-Fokker_DR1_at_Airpower11_18.jpg",
    innovations: [
      "Triplane wing configuration influenced experimental lift designs",
      "Enhanced climb rate concepts used in modern aerobatic aircraft",
      "Compact frame design inspired lightweight aviation engineering"
    ]
  },
  {
    name: "SPAD S.XIII",
    date: "1917",
    summary: "A fast French fighter aircraft widely used by Allied aces during World War I.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/SPAD_XIII_040510-F-1234P-019.jpg",
    innovations: [
      "High-speed biplane design influenced performance fighter jets",
      "Streamlined fuselage principles used in modern aerodynamics",
      "Power-to-weight optimization used in modern aircraft engineering"
    ]
  },
  {
    name: "Airco DH.4",
    date: "1917",
    summary: "A British two-seat light bomber used for reconnaissance and bombing missions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/DH-4_airmail.jpg/1920px-DH-4_airmail.jpg",
    innovations: [
      "Two-seat coordination layout influenced modern pilot–navigator aircraft",
      "Long-range light bomber design inspired civilian transport aviation",
      "Modular aircraft construction improved repair efficiency concepts"
    ]
  },
  {
    name: "Albatros D.III",
    date: "1916",
    summary: "A German fighter aircraft known for its strength and dominance in early aerial combat.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Albatros_DIII.jpg",
    innovations: [
      "Streamlined wooden fuselage influenced early aerodynamic design",
      "Balanced wing structure improved modern stability engineering",
      "Early fighter standardization influenced mass aircraft production"
    ]
  }
];

function createItemCard(item) {
  const card = document.createElement("div");
  card.classList.add("item-card");

  card.innerHTML = `
    <img 
      src="${item.image}" 
      alt="${item.name}" 
      class="item-image"
      loading="lazy"
    >
    <h2 class="item-name">${item.name}</h2>
    <p class="item-date">${item.date}</p>
    <p class="item-summary">${item.summary}</p>
    <h3>Innovations</h3>
    <ul class="item-innovations">
      ${item.innovations.map(i => `<li>${i}</li>`).join("")}
    </ul>
  `;

  return card;
}

const container = document.getElementById("planes");

planes.forEach(plane => {
  const card = createItemCard(plane);
  container.appendChild(card);
});