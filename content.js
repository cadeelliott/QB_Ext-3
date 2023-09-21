chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.response) {
    // Handle the response data here
    console.log("Received response data:", message.response);
    // You can perform actions on the webpage with the response data here
  }
});
