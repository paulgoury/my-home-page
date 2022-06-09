/*global chrome*/

chrome.runtime.onInstalled.addListener(() => {
  console.log("La extension de Chrome ha sido instalada correctamente !");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["index.html"],
  });
});
