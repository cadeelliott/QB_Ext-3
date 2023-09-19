chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "copyEntities") {
    // Send an XMLHttpRequest to fetch the data
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://c12.qbo.intuit.com/qbo12/v4/entities", true); // Replace with the actual API endpoint URL
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const responseText = xhr.responseText;

        // Parse the response (assuming it's in JSON format)
        let entitiesData;
        try {
          const responseData = JSON.parse(responseText);
          entitiesData = responseData.entities; // Replace "entities" with the actual key in your response
        } catch (error) {
          console.error("Error parsing response:", error);
          return;
        }

        // Copy the "entities" data to the clipboard
        const dummyInput = document.createElement("input");
        document.body.appendChild(dummyInput);
        dummyInput.value = JSON.stringify(entitiesData); // Convert the data to a string if needed
        dummyInput.select();
        document.execCommand("copy");
        document.body.removeChild(dummyInput);

        sendResponse({ success: true });
      }
    };
    xhr.send();
  }
});
