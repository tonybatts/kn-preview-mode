chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'ready' && window.location.href.includes("web.staging.knfilters.merce.io")) {
    location.reload()
    return true
  } else {
    location.reload()
  }
})

