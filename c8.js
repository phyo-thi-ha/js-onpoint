try {
    fetch("https://covid-api.com/api/reports/total?date=2020-03-14&iso=USA")
    .then(res => res.json())
    .then(data => console.log(data))
  } catch (error) {
    // TypeError: Failed to fetch
    console.log('There was an error', error);
  }