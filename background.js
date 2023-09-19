// Listen for the extension's button click event from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "copyData") {
    // Execute a content script to fetch data from the DevTools Network tab
    chrome.tabs.executeScript(
      {
        code:
          // Code to fetch data from the DevTools Network tab
          const entitiesResponse = [...window.devtools.networkRequests].find(request => request.name === "entities");
          if (entitiesResponse) {
            const responseData = entitiesResponse.response.json();
            responseData.then(data => {
              // Copy the JSON data to the clipboard
              const copyText = JSON.stringify(data, null, 2);
              const textArea = document.createElement("textarea");
              textArea.value = copyText;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
            });
          }
        ,
      },
      function (result) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          sendResponse({ success: false });
        } else {
          sendResponse({ success: true });
        }
      }
    );
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
  }
});
