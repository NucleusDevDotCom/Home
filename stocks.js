import dataJson from '/vxx_annual.json' assert {type: 'json'};

var e = document.getElementById('Panel2');
e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[0].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[0].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[0].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[0].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[0].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[0].AnnualPercentage + '<br>' +
			  '</p></div>';

e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[1].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[1].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[1].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[1].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[1].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[1].AnnualPercentage + '<br>' +
			  '</p></div>';
			  
e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[2].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[2].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[2].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[2].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[2].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[2].AnnualPercentage + '<br>' +
			  '</p></div>';
			  
e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[3].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[3].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[3].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[3].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[3].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[3].AnnualPercentage + '<br>' +
			  '</p></div>';
			  
e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[4].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[4].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[4].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[4].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[4].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[4].AnnualPercentage + '<br>' +
			  '</p></div>';
			  
e.innerHTML = e.innerHTML + 
			  '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px; display:inline-block;">' + 
			  '<p><b>' + 'VXX - Annual' + '</b><br>' +
			  'Open Day: ' + dataJson[5].FirstDay + '<br>' +
			  'Open Trade: ' + dataJson[5].OpenTrade + '<br>' + 
			  'Close Day: ' + dataJson[5].LastDay + '<br>' +
			  'Close Trade: ' + dataJson[5].CloseTrade + '<br>' +
			  'Diff: ' + dataJson[5].Diff + '<br>' +
			  'Annual Percentage: ' + dataJson[5].AnnualPercentage + '<br>' +
			  '</p></div>';
e.style.display = 'inline-block';
			  
			  
