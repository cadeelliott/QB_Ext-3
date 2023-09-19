chrome.webNavigation.onCompleted.addListener(function(details) {
  // Enable the extension icon when the target site is loaded
  chrome.action.enable(details.tabId);
});
