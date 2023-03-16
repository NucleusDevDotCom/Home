import dataJson from '/vxx_annual.json' assert {type: 'json'};
document.getElementById('Panel').innerHTML = JSON.stringify(dataJson);
