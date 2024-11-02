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
      const viewMore = document.createElement("button");
      viewMore.textContent = "View More";
      viewMore.classList.add("text-lavender-blush", "bg-space-cadet");
      //https://medium.com/@cyberbotmachines/how-to-pass-value-from-one-html-page-to-another-using-javascript-3c9ab62df4d
      viewMore.addEventListener("click", () => {
        let name = wonder.name.toLowerCase().replaceAll(" ", "-");
        localStorage.setItem("name", name);
        window.location.href = "wonder.html";
      });

      //
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
      div.appendChild(viewMore);
      worldList.appendChild(div);
    });
  });
});
