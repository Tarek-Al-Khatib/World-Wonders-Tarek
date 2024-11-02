const fetchWonders = async () => {
  const response = await axios.get(
    "https://www.world-wonders-api.org/v0/wonders"
  );

  return response.data;
};

document.addEventListener("DOMContentLoaded", () => {
  const worldList = document.getElementById("world-wonders");

  let worldWonders;

  fetchWonders().then((data) => {
    worldWonders = data;
    console.log(worldWonders);
    worldWonders.forEach((wonder) => {
      const div = document.createElement("div");
      div.classList.add("wonder", "text-center");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      p.innerHTML = wonder.summary;
      h2.textContent = wonder.name;
      const link = document.createElement("a");
      link.href = wonder.links.wiki;
      link.textContent = "Learn More";
      const image = document.createElement("img");
      image.src = wonder.links.images[1];

      div.appendChild(image);
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(link);
      worldList.appendChild(div);
    });
  });
});
