let BaseUrl = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval={2}&apikey=AO48IFCXLA3BX1O9";

const sym = document.querySelector(".weight");
const intraday = document.querySelector(".hight");
const weekly = document.querySelector(".age");
const daily = document.querySelector(".weight");
const monthly = document.querySelector(".hight");
let Url = null;
<<<<<<< HEAD
if (intraday != null && intraday != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_INTRADAY").replace("{1}", sym).replace("{2}", "1min");
} else if (weekly != null && weekly != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_WEEKLY").replace("{1}", sym).replace("{2}", "1min");
} else if (daily != null && daily != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_DAILY").replace("{1}", sym).replace("{2}", "1min");
} else if (monthly != null && monthly != undefined) {
  Url = BaseUrl.replace("{0}", "TIME_SERIES_MONTHLY").replace("{1}", sym).replace("{2}", "1min");
=======
if(intraday != null && intraday != undefined) {
  Url = BaseUrl.replace("{0}","TIME_SERIES_INTRADAY").replace("{1}",sym).replace("{2}","60min");
} else if(weekly != null && weekly != undefined) {
    Url = BaseUrl.replace("{0}","TIME_SERIES_WEEKLY").replace("{1}",sym).replace("{2}","60min");
} else if(daily != null && daily != undefined) {
    Url = BaseUrl.replace("{0}","TIME_SERIES_DAILY").replace("{1}",sym).replace("{2}","60min");
} else if(monthly != null && monthly != undefined) {
    Url = BaseUrl.replace("{0}","TIME_SERIES_MONTHLY").replace("{1}",sym).replace("{2}","60min");
} else {
  Url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&apikey=AO48IFCXLA3BX1O9";
>>>>>>> b662b9aba72efb3b280b141196d69795afdd0cc9
}
console.log(Url);

let stockData = null;
function callApi() {
<<<<<<< HEAD
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
=======
fetch(Url)
  .then(function(data) {
    stockData = data.json();
    console.log("anur");
    console.log(stockData);
    console.log("khaa");
    processStockData();
    //stockData = data["Meta Data"];
    //console.log("2 "+stockData);
  })
  .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
  });
}

callApi().then(function(result){
    stockData = result["Meta Data"];
    console.log("2 "+stockData);
  })

  console.log("3 "+stockData);

  async function processStockData() {
  const stock60mindata = await stockData["Time Series (60min)"];
  if(stock60mindata == null || stock60mindata == undefined) {
    console.log("PROBLEM");
  }
  const entries = Object.entries(stock60mindata);
  entries.forEach(Element => {
    console.log(Element);
  })
  //stock60mindata.array.forEach(element => {
  //  console.log(element);
  //});
  }

  //processStockData().then(function(result){
  //  console.log("anurag");
  //})

  

>>>>>>> b662b9aba72efb3b280b141196d69795afdd0cc9
