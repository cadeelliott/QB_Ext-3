chrome.webRequest.onCompleted.addListener(
  function(details) {
    if (details.url === "https://c12.qbo.intuit.com/qbo12/v4/entities") {
      fetch(details.url)
        .then(response => response.text())
        .then(responseText => {
          // Store the response in a variable or perform any desired action
          const responseData = responseText;
          console.log(responseData);
        })
        .catch(error => {
          console.error("Failed to fetch data:", error);
        });
    }
  },
  {
    urls: ["https://c12.qbo.intuit.com/qbo12/v4/entities"]
  },
  ["responseHeaders"]
);
