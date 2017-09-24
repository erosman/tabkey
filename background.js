'use strict';

// ----------------- keyboard shortcuts --------------------
chrome.commands.onCommand.addListener(command => {

  chrome.tabs.query({currentWindow: true}, tabs => { // get the active tab
    
    let activeId, previousId, nextId;
    for (let i = 0, len = tabs.length; i < len; i++) {
      
      if (tabs[i].active) {
        activeId = tabs[i].id;
        previousId = tabs[i-1] && tabs[i-1].id;
        nextId = tabs[i+1] && tabs[i+1].id;
        break;
      }
    }  

    switch (command) {

      case 'close': chrome.tabs.remove(activeId); break;
      case 'previous': previousId && chrome.tabs.update(previousId, {active: true}); break; 
      case 'next': nextId && chrome.tabs.update(nextId, {active: true}); break;
    }
  });
});
