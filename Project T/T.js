const trips = ["Paris", "Tokyo", "New York"];

trips.forEach(city => {
  const div = document.createElement("div");
  div.className = "trip-card";
  div.innerHTML = `<h3>${city}</h3><p>Explore the wonders of ${city}.</p>`;
  document.body.appendChild(div);
});

const destinations = [
  { title: "Paris", description: "City of lights and love." },
  { title: "Tokyo", description: "Modern tech meets tradition." },
  { title: "New York", description: "The city that never sleeps." }
];

const container = document.getElementById("card-container");

destinations.forEach((item) => {
  // Create card wrapper
  const card = document.createElement("div");
  card.className = "card";

  // Create title
  const title = document.createElement("h3");
  title.textContent = item.title;

  // Create description
  const desc = document.createElement("p");
  desc.textContent = item.description;

  // Add content to card
  card.appendChild(title);
  card.appendChild(desc);

  // Append card to container
  container.appendChild(card);
});
