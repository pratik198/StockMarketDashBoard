let Url = "https://www.alphavantage.co/query?function={0}&symbol={1}&interval=60min&apikey=AO48IFCXLA3BX1O9";
let BaseUrl = Url;
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
  document.querySelector("input").value = " ";
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
    Url = BaseUrl;
    processStockDataAtOnce();
  })
  .catch(error => {
      console.error('Fetch error:', error);
  });
}

let timekey = null;
let marketopen = null;
let marketlow = null;
let markethigh = null;
let marketvolume = null;
let marketclose = null;
const timekeyvalues=[];
const marketopenvalues=[];
const marketclosevalues=[];
const marketlowvalues=[];
const markethighvalues=[];
const marketvolumevalues=[];

//https://stackoverflow.com/questions/5536596/dynamically-creating-html-elements-using-javascript
//https://www.w3schools.com/jsref/met_table_insertrow.asp#:~:text=The%20insertRow()%20method%20creates,method%20to%20remove%20a%20row.

async function processStockDataAtOnce() {
  const timedstockData = await stockData["Time Series (60min)"];
  console.log(timedstockData);
  const entries = Object.entries(timedstockData);
  entries.forEach(Element => {
    timekey = Element[0];
    timekeyvalues.push(timekey);
    const timevalueobj = Element[1];
    marketopen = timevalueobj["1. open"];
    marketopenvalues.push(marketopen);
    marketclose = timevalueobj["4. close"];
    marketclosevalues.push(marketclose);
    marketlow = timevalueobj["3. low"];
    marketlowvalues.push(marketlow);
    markethigh = timevalueobj["2. high"];
    markethighvalues.push(markethigh);
    marketvolume = timevalueobj["5. volume"];
    marketvolumevalues.push(marketvolume);
  });

  var table = document.getElementById("stocktable");
  //for(var i=0;i<marketclosevalues.length;i++) {
    for(var i=0;i<5;i++) {
    var row = table.insertRow(i+1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerHTML = timekeyvalues[i];
    cell1.innerHTML = marketopenvalues[i];
    cell2.innerHTML = marketlowvalues[i];
    cell3.innerHTML = markethighvalues[i];
    cell4.innerHTML = marketclosevalues[i];
    cell5.innerHTML = marketvolumevalues[i];
  }
}

/** 
  async function processStockData() {
    const timedstockData = stockData["Time Series (60min)"];
    console.log(timedstockData);
    const entries = Object.entries(timedstockData);
    entries.forEach(Element => {
      const timekey = Element[0];
      const timevalueobj = Element[1];
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
    });
  }
  **/



  

