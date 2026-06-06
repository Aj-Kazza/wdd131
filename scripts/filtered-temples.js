const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Melbourne Australia",
    location: "Melbourne, Australia",
    dedicated: "2000, June, 16",
    area: 10700,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-austrailia-temple-lds-991373-wallpaper.jpg"
  },
  {
    templeName: "Hamilton New Zealand",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 20-22",
    area: 45251,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton_new_zealand_temple_lds.jpg"
  },
  {
    templeName: "Suva Fiji",
    location: "Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 12755,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/suva-fiji/400x250/suva-fiji-temple-lds-264818-wallpaper.jpg"
  }
];

const container = document.getElementById("container");
const oldList = document.getElementById("old");
const newList = document.getElementById("new");
const smallList = document.getElementById("small");
const largeList = document.getElementById("large");
const homeList = document.getElementById("home");



function renderTemple(temple) {
    return `
    <div class="card">
    <h2>${temple.templeName}</h2>
    <p>Location: <span class="focused">${temple.location}</span></p>
    <p>Dedicated: <span class="focused">${temple.dedicated}</span></p>
    <p>Area: <span class="focused">${temple.area} sq ft</span></p>
    <picture>
        <img src="${temple.imageUrl}" alt="image of the ${temple.templeName} temple" loading="lazy" width="400" height="250">
    </picture>
    </div>
    `;
}

function renderList(list) {
  container.innerHTML = list.map(renderTemple).join("");
}

renderList(temples);



oldList.addEventListener("click", () => {
  const before1990 = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1990;
  })
  renderList(before1990)
})

newList.addEventListener("click", () => {
  const after2000 = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  })
  renderList(after2000)
})

largeList.addEventListener("click", () => {
  const larger = temples.filter(temple => temple.area > 90000);
  renderList(larger);
})

smallList.addEventListener("click", () => {
  const smaller = temples.filter(temple => temple.area < 10000);
  renderList(smaller);
})

homeList.addEventListener("click", () => {
  renderList(temples);
})
