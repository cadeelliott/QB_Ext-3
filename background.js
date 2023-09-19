// background.js

// Function to fetch data from the "entities" section of the Network tab
function fetchDataFromEntities() {
  chrome.devtools.inspectedWindow.eval(
    
    // This code runs in the context of the inspected page
    const entitiesResponse = performance.getEntriesByType('resource')
      .filter(entry => entry.name.includes('entities.json'))[0];
    
    if (entitiesResponse) {
      fetch(entitiesResponse.name)
        .then(response => response.json())
        .then(data => {
          // Send the data to the extension popup
          chrome.runtime.sendMessage({ data });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    ,
    function (result, isException) {
      if (isException) {
        console.error('Error in eval:', result);
      }
    }
  );
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'copyData') {
    // Call the function to fetch data and copy it to the clipboard
    fetchDataFromEntities();
  }
});
