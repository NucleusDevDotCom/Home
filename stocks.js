import dataJson from '/vxx_annual.json' assert {type: 'json'};
document.getElementById('Panel').innerHTML = '<div style="border:1px solid; border-radius:3px;width:200px;padding:15px;">' + 
		              '<p><b>' + 'VXX - Annual' + '</b><br>' +
                      'Open Day: ' + dataJson.results[0].FirstDay + '<br>' +
                      'Open Trade: ' + dataJson.results[0].OpenTrade + '<br>' + 
                      'Close Day: ' + dataJson.results[0].LastDay + '<br>' +
			          'Close Trade: ' + dataJson.results[0].CloseTrade + '<br>' +
                      'Diff: ' + dataJson.results[0].Diff + '<br>' +
					  'Annual Percentage: ' + dataJson.results[0].AnnualPercentage + '<br>' +
					  '</p></div>';
