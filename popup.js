window.onload = () => {
  chrome.runtime.sendMessage({ message: "loaded" });
}