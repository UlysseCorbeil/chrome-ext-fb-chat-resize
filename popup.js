let activate = document.querySelector('checkbox');

console.log("dasdsada");

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get('state', function(data) {
        if (data.state === 'on') {
            activate.checked = true;
        } else {
            activate.checked = false;
        }
    });
});