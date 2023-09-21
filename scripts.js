let apiKey = "AO48IFCXLA3BX1O9";
let BaseUrl = "https://www.alphavantage.co/query?function=func&symbol=sym&interval=int&apikey=AO48IFCXLA3BX1O9";
let Url = BaseUrl.replace("func","TIME_SERIES_INTRADAY").replace("sym","MSFT").replace("int","1min");
fetch(Url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
  });