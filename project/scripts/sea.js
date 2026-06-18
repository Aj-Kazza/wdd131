const ships = [
  {
    name: "HMS Dreadnought",
    date: "1906 (in service during WWI)",
    summary: "A revolutionary British battleship that redefined naval power and influenced all future warships.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/HMS_Dreadnought_1906.jpg",
    innovations: [
      "All-big-gun battleship design influenced modern naval firepower strategy",
      "Steam turbine propulsion improved efficiency in marine engineering",
      "Standardized battleship design led to modern fleet uniformity concepts"
    ]
  },
  {
    name: "SMS Emden",
    date: "1908",
    summary: "A German light cruiser known for its raiding operations and tactical success in the Indian Ocean.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/SMS_Emden.jpg",
    innovations: [
      "Long-range commerce raiding strategies influenced modern naval disruption tactics",
      "Efficient cruiser design inspired modern patrol vessel engineering",
      "Radio interception tactics contributed to modern signals intelligence concepts"
    ]
  },
  {
    name: "HMS Queen Mary",
    date: "1913",
    summary: "A British battlecruiser lost at the Battle of Jutland, known for its speed and heavy armament.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/HMS_Queen_Mary.jpg",
    innovations: [
      "Battlecruiser speed-and-firepower balance influenced modern fast-attack ship design",
      "Heavy gun turret arrangement shaped future naval artillery layouts",
      "Armor-speed tradeoff lessons influenced modern warship survivability design"
    ]
  },
  {
    name: "SMS U-31 (U-boat)",
    date: "1914",
    summary: "A German submarine used in unrestricted submarine warfare during World War I.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/U-boat_U-31.jpg",
    innovations: [
      "Submarine stealth warfare influenced modern underwater naval strategy",
      "Diesel-electric propulsion systems shaped modern submarine engineering",
      "Underwater endurance concepts led to modern deep-sea vessel design"
    ]
  },
  {
    name: "HMS Lion",
    date: "1912",
    summary: "A British battlecruiser that served as Admiral Beatty’s flagship at the Battle of Jutland.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/HMS_Lion_1915.jpg",
    innovations: [
      "Fast capital ship design influenced modern cruiser doctrine",
      "Advanced fire control systems contributed to modern naval targeting systems",
      "Distributed armor layout informed modern survivability engineering"
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

const container = document.getElementById("ships");

ships.forEach(ship => {
  const card = createItemCard(ship);
  container.appendChild(card);
});