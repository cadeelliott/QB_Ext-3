chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "copyEntities") {
    // Your logic to extract and copy the 'entities' response here
    // For example, you can use XMLHttpRequest or fetch to make requests and process responses.
    // Once you have the 'entities' data, copy it to the clipboard.

    // Example: Copying to clipboard
    const entitiesData = "Your 'entities' response data"; // Replace with actual data
    const dummyInput = document.createElement("input");
    document.body.appendChild(dummyInput);
    dummyInput.value = entitiesData;
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);

    sendResponse({ success: true });
  }
});
