let BaseUrl = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval=60min&apikey=AO48IFCXLA3BX1O9";
let Url = null;

function initialiseFunctionAsIntraDay() {
  Url = BaseUrl.replace("{0}","TIME_SERIES_INTRADAY");
  console.log(Url);
}

function initialiseFunctionAsDaily() {
  Url = BaseUrl.replace("{0}","TIME_SERIES_DAILY");
  console.log(Url);
}

function initialiseFunctionAsWeekly() {
  Url = BaseUrl.replace("{0}","TIME_SERIES_WEEKLY");
  console.log(Url);
}

function initialiseFunctionAsMonthly() {
  Url = BaseUrl.replace("{0}","TIME_SERIES_DAILY");
  console.log(Url);
}

function initialiseSymbol() {
  const sym = document.getElementById("symbol").value;
  Url = BaseUrl.replace("{1}",sym);
  console.log(Url);
}

/*
function initialise() {
const sym = document.querySelector(".symbol");
const intraday = document.querySelector(".intraday");
const weekly = document.querySelector(".weekly");
const daily = document.querySelector(".daily");
const monthly = document.querySelector(".monthly");

console.log(intraday);
console.log(weekly);
console.log(daily);
console.log(monthly)
if(intraday != null && intraday != undefined) {
  console.log(intraday);
  Url = BaseUrl.replace("{0}","TIME_SERIES_INTRADAY").replace("{1}",sym);
} else if(weekly != null && weekly != undefined) {
    console.log(weekly);
    Url = BaseUrl.replace("{0}","TIME_SERIES_WEEKLY").replace("{1}",sym);
} else if(daily != null && daily != undefined) {
    console.log(daily);
    Url = BaseUrl.replace("{0}","TIME_SERIES_DAILY").replace("{1}",sym);
} else if(monthly != null && monthly != undefined) {
    console.log(monthly)
    Url = BaseUrl.replace("{0}","TIME_SERIES_MONTHLY").replace("{1}",sym);
} else {
  console.log("nothing")
  Url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&apikey=AO48IFCXLA3BX1O9";
}
console.log(Url);
callApi();
}
*/
let stockData = null;
function callApi() {
  fetch(Url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    stockData = data; 
    console.log(stockData);
    processStockData();
  })
  .catch(error => {
      console.error('Fetch error:', error);
  });
}
let marketopen = null;
let marketlow = null;
let markethigh = null;
let marketvolume = null;
let marketclose = null;

function processStockData() {
  const timedstockData = stockData["Time Series (60min)"];
  console.log(timedstockData);
  const entries = Object.entries(timedstockData);
  entries.forEach(Element => {
    //console.log(Element);
    //Processing each time stock element
    const timekey = Element[0];
    const timevalueobj = Element[1];
    //console.log(timekey);
    //console.log(timevalueobj);
    marketopen = timevalueobj["1. open"];
    marketclose = timevalueobj["4. close"];
    marketlow = timevalueobj["3. low"];
    markethigh = timevalueobj["2. high"];
    marketvolume = timevalueobj["5. volume"];
    console.log(marketvolume);
  })
}



/*
function callApi() {
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
  */

  

