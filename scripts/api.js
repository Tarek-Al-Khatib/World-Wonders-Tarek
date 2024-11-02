const fetchWonders = async () => {
  const response = await axios.get(
    "https://www.world-wonders-api.org/v0/wonders"
  );

  return response.data;
};

let worldWonders;

fetchWonders().then((data) => {
  worldWonders = data;
});
