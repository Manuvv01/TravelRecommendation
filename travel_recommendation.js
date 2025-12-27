fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    data.countries.forEach(country => {
      console.log('Country:', country.name);

      country.cities.forEach(city => {
        console.log('  City:', city.name);
        console.log('  Description:', city.description);
      });
    });
  });