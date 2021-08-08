/**
 * Gets the desired element on the client page and clicks on it
 */
function clickPointsButton() {
  var activityTab = document.querySelector('[aria-label="Claim Bonus"]');
  if (activityTab) {
    activityTab.click();
    chrome.runtime.sendMessage({ message: "Clicked successfully" });
  }
}

function runClicker() {
  setTimeout(() => {
    chrome.runtime.sendMessage({ message: "Trying to click..." });
    clickPointsButton();
    runClicker();
  }, 10000);
}

window.addEventListener('DOMContentLoaded', function () {
  runClicker();
});
