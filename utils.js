/**
 * Gets the desired element on the client page and clicks on it
 */
function clickPointsButton() {
    var activityTab = document.getElementsByClassName("tw-button--success tw-interactive")[0];
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
    }, 3000);
}

window.addEventListener('DOMContentLoaded', function () {
    runClicker();
});