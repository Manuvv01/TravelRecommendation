//Search (Console.log)
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
 v
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





//SEARCH
const resultsDiv = document.getElementById("results");

document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("searchInput").value
    .trim()
    .toLowerCase();

  resultsDiv.innerHTML = ""; // clear previous results

  fetch("travel_recommendation_api.json")
    .then(res => res.json())
    .then(data => {

      if (keyword === "beach" || keyword === "beaches") {
        showBeaches(data.beaches);

      } else if (keyword === "temple" || keyword === "temples") {
        showTemples(data.temples);

      } else if (keyword === "country" || keyword === "countries") {
        showCountries(data.countries);

      } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      }
    });
});

//Beaches
function showBeaches(beaches) {
  beaches.forEach(beach => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${beach.name}</h3>
        <p>${beach.description}</p>
        <img src="${beach.imageUrl}" width="250">
      </div>
    `;
  });
}

//Temples
function showTemples(temples) {
  temples.forEach(temple => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${temple.name}</h3>
        <p>${temple.description}</p>
        <img src="${temple.imageUrl}" width="250">
      </div>
    `;
  });
}

//Countries
function showCountries(countries) {
  countries.forEach(country => {
    resultsDiv.innerHTML += `<h2>${country.name}</h2>`;

    country.cities.forEach(city => {
      resultsDiv.innerHTML += `
        <div class="card">
          <h4>${city.name}</h4>
          <p>${city.description}</p>
          <img src="${city.imageUrl}" width="250">
        </div>
      `;
    });
  });
}


//clear
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  resultsDiv.innerHTML = "";
  console.clear();
});
