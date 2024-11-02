const wonderName = localStorage.getItem("name");
const fetchDetails = async () => {
  const url = `https://www.world-wonders-api.org/v0/wonders/name/${wonderName}`;
  console.log(url);
  const response = await axios.get(url);

  return response.data;
};

fetchDetails().then((wonder) => {
  const details = document.getElementById("details");

  details.innerHTML = `
            <h1>${wonder.name}</h1>
            <p>Summary:${wonder.summary}</p>
            <p>Location: ${wonder.location}</p>
            <p>Time Period: ${wonder.time_period}</p>
            <p>Build Year: ${wonder.build_year}</p>
            <div class="image-container flex horizontal-center">
              ${wonder.links.images.map((image) => `<img src="${image}">`)}
            </div>
            <p>Links:</p>
            <ul>
              <li><a href="${wonder.links.wiki}">Wikipedia</a></li>
              <li><a href="${wonder.links.britannica}">Britannica</a></li>
              <li><a href="${wonder.links.trip_advisor}">Trip Advisor</a></li>
              <li><a href="${wonder.links.google_maps}">Google Maps</a></li>
            </ul>
          `;
});
