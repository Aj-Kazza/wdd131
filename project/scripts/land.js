const tanks = [
  {
    name: "Mark I (British Tank)",
    date: "1916",
    summary: "The first-ever combat tank used in warfare, introduced by Britain during World War I.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mark_I_series_tank.jpg/3840px-Mark_I_series_tank.jpg",
    innovations: [
      "Tracked vehicle design influenced modern bulldozers and excavators",
      "Cross-terrain mobility principles used in rescue and off-road vehicles",
      "Armor layout concepts inspired modern protective vehicle engineering"
    ]
  },
  {
    name: "Renault FT",
    date: "1917",
    summary: "A revolutionary French light tank that set the standard for modern tank design.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/FT_17.jpg",
    innovations: [
      "Rotating turret concept used in construction cranes and firefighting platforms",
      "Rear-engine layout influenced modern vehicle packaging and efficiency",
      "Compact modular design principles used in agricultural machinery"
    ]
  },
  {
    name: "A7V Sturmpanzerwagen",
    date: "1918",
    summary: "Germany’s only operational heavy tank used during World War I.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mephisto_A7V_in_AWM_front_view.jpg/1920px-Mephisto_A7V_in_AWM_front_view.jpg",
    innovations: [
      "Heavy-duty chassis engineering applied in industrial transport vehicles",
      "Multi-operator coordination inspired modern emergency response vehicles",
      "Robust suspension concepts used in mining and freight equipment"
    ]
  },
  {
    name: "Whippet Tank (Medium Mark A)",
    date: "1918",
    summary: "A fast British tank designed for exploitation and breakthrough operations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Whippet.jpg",
    innovations: [
      "High-speed tracked mobility influenced modern snow vehicles",
      "Lightweight armored frame design inspired delivery and utility vehicles",
      "Efficient engine-to-weight ratio principles used in performance engineering"
    ]
  },
  {
    name: "Saint-Chamond",
    date: "1917",
    summary: "A French heavy tank known for its long chassis and naval-style gun.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/St._Chamond_-_Historial_de_la_Grand_Guerre%2C_Peronne_%281%29.jpg/3840px-St._Chamond_-_Historial_de_la_Grand_Guerre%2C_Peronne_%281%29.jpg",
    innovations: [
      "Extended chassis design influenced long industrial transport platforms",
      "Large forward-mounted equipment inspired heavy construction machinery layout",
      "Early integrated systems approach used in modern engineering design workflows"
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

const container = document.getElementById("tanks");

tanks.forEach(tank => {
  const card = createItemCard(tank);
  container.appendChild(card);
});