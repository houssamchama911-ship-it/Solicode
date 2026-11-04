const products = [
  {
    name: "Rolex Submariner 5513",
    cat: "Montres",
    price: 12800,
    icon: "⌚",
    state: "Excellent",
    year: 1978,
  },
  {
    name: "IPHONE 15 pro 256go",
    cat: "Phone",
    price: 740,
    icon: "📱",
    state: "Très bon",
    year: 1932,
  },
  {
    name: "Kawazaki 560",
    cat: "Moto",
    price: 3200,
    icon: "🏍️",
    state: "Excellent",
    year: 1890,
  },
  {
    name: "MAC boock pro M3",
    cat: "PC portable",
    price: 6850,
    icon: "💻",
    state: "Très bon",
    year: 1989,
  },
  {
    name: "Airpodtes pro 3",
    cat: "Accessoire",
    price: 145,
    icon: "🎧",
    state: "Bon",
    year: 1967,
  },
  {
    name: "Porche 950",
    cat: "VoitureLuxe",
    price: 5900,
    icon: "🏎️",
    state: "Excellent",
    year: 1971,
  },
  {
    name: "Collier saphir naturel",
    cat: "Bijoux",
    price: 11900,
    icon: "📿",
    state: "Excellent",
    year: 1954,
  },
  {
    name: "Sculpture bronze signée",
    cat: "Art",
    price: 890,
    icon: "🗿",
    state: "Très bon",
    year: 1912,
  },
  {
    name: "Mercedes 190 SL",
    cat: "Automobile",
    price: 9200,
    icon: "🚘",
    state: "Bon",
    year: 1960,
  },
];
let activeCategory = "Toutes";
const eur = (n) => new Intl.NumberFormat("fr-FR").format(n) + " €";
function renderProducts() {
  const q = document.getElementById("search").value.toLowerCase();
  let list = products.filter(
    (p) =>
      (activeCategory === "Toutes" || p.cat === activeCategory) &&
      `${p.name} ${p.cat}`.toLowerCase().includes(q),
  );
  const sort = document.getElementById("sort").value;
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  document.getElementById("productGrid").innerHTML =
    list
      .map(
        (p) => `
 <article class="product">
  <div class="product-img"><span class="badge">${p.cat}</span>${p.icon}</div>
  <div class="product-info"><small>${p.state} · ${p.year}</small><h3>${p.name}</h3>
   <div class="product-bottom"><span class="product-price">${eur(p.price)}</span><small>Estimation</small></div>
  </div>
 </article>`,
      )
      .join("") || "<p>Aucun produit ne correspond à votre recherche.</p>";
}
function filterCategory(cat) {
  activeCategory = cat;
  document.getElementById("catalogue").scrollIntoView({ behavior: "smooth" });
  renderProducts();
}
function openEstimate() {
  document.getElementById("modal").classList.add("show");
  document.getElementById("modal").setAttribute("aria-hidden", "false");
}
function closeEstimate() {
  document.getElementById("modal").classList.remove("show");
  document.getElementById("modal").setAttribute("aria-hidden", "true");
}
function estimate() {
  const cat = document.getElementById("mCategory").value;
  const state = document.getElementById("mState").value;
  const year = Number(document.getElementById("mYear").value) || 2000;
  const base = {
    Montres: 6000,
    Bijoux: 4500,
    Art: 3500,
    Automobile: 35000,
    Collection: 1200,
  }[cat];
  const stateFactor = {
    Excellent: 1.35,
    "Très bon": 1.05,
    Bon: 0.72,
    "À restaurer": 0.42,
  }[state];
  const ageFactor = Math.min(2.1, 1 + Math.max(0, 2026 - year) * 0.008);
  const value = Math.round((base * stateFactor * ageFactor) / 50) * 50;
  document.getElementById("estimateResult").textContent =
    `Estimation indicative : ${eur(value)} · Indice de confiance 78%`;
}
function toggleMenu() {
  document.querySelector(".header nav").style.display =
    document.querySelector(".header nav").style.display === "flex"
      ? "none"
      : "flex";
}
renderProducts();
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeEstimate();
});
