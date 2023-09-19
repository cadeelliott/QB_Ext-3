chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Request URL:", details.url);
    console.log("Request Method:", details.method);
    console.log("Request Type:", details.type);
  },
  { urls: ["<all_urls>"] },
  ["requestHeaders"]
);
