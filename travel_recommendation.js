document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("searchInput").value
    .trim()
    .toLowerCase();

  fetch("travel_recommendation_api.json")
    .then(res => res.json())
    .then(data => {
      console.clear(); // optional
      console.log("Search keyword:", keyword);

      if (keyword === "beach" || keyword === "beaches") {
        console.log("BEACH RESULTS:");
        data.beaches.forEach(beach => {
          console.log(beach.name);
          console.log(beach.description);
        });

      } else if (keyword === "temple" || keyword === "temples") {
        console.log("TEMPLE RESULTS:");
        data.temples.forEach(temple => {
          console.log(temple.name);
          console.log(temple.description);
        });

      } else if (keyword === "country" || keyword === "countries") {
        console.log("COUNTRY RESULTS:");
        data.countries.forEach(country => {
          console.log(country.name);
        });

      } else {
        console.log("No results found.");
      }
    })
    .catch(error => console.error("Fetch error:", error));
});
