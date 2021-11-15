chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({ 'active': true, "lastFocusedWindow": true },
    () => {
      chrome.tabs.executeScript({
        file: "clearCache.js"
      })

      chrome.tabs.create({ url: "STAGING_API", active: false }, (tab) => {
        setTimeout(() => {
          chrome.tabs.remove(tab.id)
        }, 1000);
      })

      chrome.tabs.create({ url: "PROD_API", active: false }, (tab) => {
        setTimeout(() => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, 'ready')
          })
          chrome.tabs.remove(tab.id)
        }, 1000);
      })

      chrome.tabs.create({ url: "UAT_API", active: false }, (tab) => {
        setTimeout(() => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, 'ready')
          })
          chrome.tabs.remove(tab.id)
        }, 1000);
      })
    }
  )
})


chrome.tabs.onUpdated.addListener(() => {
  chrome.cookies.get({ name: "__next_preview_data", url: "https://web.staging.knfilters.merce.io/" }, (result) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (thisTabs) => {
      if (result) {
        chrome.tabs.sendMessage(thisTabs[0].id, 'previewMode')
        chrome.tabs.executeScript({
          file: "previewMode.js"
        })
      }
    })
  })

  chrome.cookies.get({ name: "__next_preview_data", url: "https://www.knfilters.com/" }, (result) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (thisTabs) => {
      if (result) {
        chrome.tabs.sendMessage(thisTabs[0].id, 'previewModeProd')
        chrome.tabs.executeScript({
          file: "previewMode.js"
        })
      }
    })
  })

  chrome.cookies.get({ name: "__next_preview_data", url: "https://stg.knfilters.com/" }, (result) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (thisTabs) => {
      if (result) {
        chrome.tabs.sendMessage(thisTabs[0].id, 'previewModeUAT')
        chrome.tabs.executeScript({
          file: "previewMode.js"
        })
      }
    })
  })
})



