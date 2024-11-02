const wonderName = localStorage.getItem("name");
const fetchDetails = async () => {
  const url = `https://www.world-wonders-api.org/v0/wonders/name/${wonderName}`;
  console.log(url);
  const response = await axios.get(url);

  return response.data;
};

fetchDetails().then((data) => {
  console.log(data);
});
