let BaseUrl = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval={2}&apikey=AO48IFCXLA3BX1O9";

const sym = document.querySelector(".weight");
const intraday = document.querySelector(".hight");
const weekly = document.querySelector(".age");
const daily = document.querySelector(".weight");
const monthly = document.querySelector(".hight");
let Url = null;
if (intraday != null && intraday != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_INTRADAY").replace("{1}", sym).replace("{2}", "1min");
} else if (weekly != null && weekly != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_WEEKLY").replace("{1}", sym).replace("{2}", "1min");
} else if (daily != null && daily != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_DAILY").replace("{1}", sym).replace("{2}", "1min");
} else if (monthly != null && monthly != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_MONTHLY").replace("{1}", sym).replace("{2}", "1min");
}
console.log(Url);


function callApi() {
  fetch(Url)
    .then(function (data) {
      const d = data.json();
      console.log("anur");
      console.log(d);
      console.log("khaa");
      stockData = data["Meta Data"];
      console.log("2 " + stockData);
    })
    .catch(function (error) {
      console.error("There was a problem with the fetch operation:", error);
    });
}
let stockData;
callApi().then(function (result) {
  stockData = result["Meta Data"];

  console.log("2 " + stockData);

})

console.log("3 " + stockData);