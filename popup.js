document.addEventListener("DOMContentLoaded", function() {
  const copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "copyEntities" }, function(response) {
        if (response && response.success) {
          alert("Entities copied to clipboard!");
        }
      });
    });
  });
});
