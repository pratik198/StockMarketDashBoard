let Url = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval=60min&apikey=AO48IFCXLA3BX1O9";

function initialiseFunctionAsIntraDay() {
  Url = Url.replace("{0}","TIME_SERIES_INTRADAY");
  console.log(Url);
  getStockData();
}

function initialiseFunctionAsDaily() {
  Url = Url.replace("{0}","TIME_SERIES_DAILY");
  console.log(Url);
  getStockData();
}

function initialiseFunctionAsWeekly() {
  Url = Url.replace("{0}","TIME_SERIES_WEEKLY");
  console.log(Url);
  getStockData();
}

function initialiseFunctionAsMonthly() {
  Url = Url.replace("{0}","TIME_SERIES_DAILY");
  console.log(Url);
  getStockData();
}

function initialiseSymbol() {
  const symbol = document.getElementById("symbol").value;
  Url = Url.replace("{1}",symbol);
  console.log(Url);
}

function getStockData() {
  if(!Url.includes("{1}")) {
    callApi();
  }
}


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
    document.querySelector('.time').innerHTML = timekey;
    document.querySelector('.open').innerHTML = marketopen;
    document.querySelector('.low').innerHTML = marketlow;
    document.querySelector('.high').innerHTML = markethigh;
    document.querySelector('.close').innerHTML = marketclose;
    document.querySelector('.volume').innerHTML = marketvolume;

  })
}


  

