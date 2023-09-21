let apiKey = "AO48IFCXLA3BX1O9";
let BaseUrl = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval={2}&apikey=AO48IFCXLA3BX1O9";
let Url = BaseUrl.replace("{0}","TIME_SERIES_INTRADAY").replace("{1}","MSFT").replace("{2}","1min");
console.log(Url);
async function callApi() {
await fetch(Url)
  .then(function(data) {
    console.log(data.json());
  })
  .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
  });
}

callApi();
