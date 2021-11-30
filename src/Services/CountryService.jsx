var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://countries-cities.p.rapidapi.com/location/country/list',
  headers: {
    'x-rapidapi-host': 'countries-cities.p.rapidapi.com',
    'x-rapidapi-key': '0a565cf9d0mshc46156e41bada20p189ed9jsn6daf99c029c9'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  console.log(response.data.countries);
  console.log(response.data.countries.BF);
}).catch(function (error) {
	console.error(error);
});
