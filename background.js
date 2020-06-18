chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // if (request.greeting === "GetPageInfo") {
    //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //         // Injects JavaScript code into a page
    //         chrome.tabs.executeScript(tabs[0].id, { file: "utils.js" });
    //     });
    // } else 
    if (request.message) {
        console.log(request.message);
    }
});