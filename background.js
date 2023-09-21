chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.method === "POST" && details.url.includes("entities")) {
      fetch(details.url)
        .then((response) => response.text())
        .then((data) => {
          chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            function: (data) => {
              // Send the data to the content script
              chrome.runtime.sendMessage({ response: data });
            },
            args: [data],
          });
        });
    }
  },
  { urls: ["<all_urls>"] }
);
