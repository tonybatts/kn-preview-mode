try {
  isEye
} catch (error) {
  isEye = 0
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'previewMode' && window.location.href.includes("web.staging.knfilters.merce.io") && isEye === 0) {

    const previewModeIcon = document.createElement("img")

    previewModeIcon.src = "https://res.cloudinary.com/knfilters-com/image/upload/v1620792157/Icons/eye_lb5xvc.svg"
    previewModeIcon.style.position = "fixed"
    previewModeIcon.style.top = "5px"
    previewModeIcon.style.right = "5px"
    previewModeIcon.style.width = "32px"
    previewModeIcon.style.height = "32px"
    previewModeIcon.style.transition = "all .3s"
    previewModeIcon.style.zIndex = "9999999999999"
    previewModeIcon.classList.add(".preview__eye")

    previewModeIcon.addEventListener("mouseenter", (e) => {
      if (previewModeIcon.style.right === "5px") {
        previewModeIcon.style.left = "5px"
        previewModeIcon.style.right = "auto"
      } else {
        previewModeIcon.style.left = "auto"
        previewModeIcon.style.right = "5px"
      }
    })

    document.body.appendChild(previewModeIcon)
    isEye = 1

    // location.reload()
    return true
  } else if (message === 'previewModeProd' && window.location.href.includes("www.knfilters.com") && document.querySelector("#__next") && isEye === 0) {
    const previewModeIcon = document.createElement("img")

    previewModeIcon.src = "https://res.cloudinary.com/knfilters-com/image/upload/v1620792157/Icons/eye_lb5xvc.svg"
    previewModeIcon.style.position = "fixed"
    previewModeIcon.style.top = "5px"
    previewModeIcon.style.right = "5px"
    previewModeIcon.style.width = "32px"
    previewModeIcon.style.height = "32px"
    previewModeIcon.style.transition = "all .3s"
    previewModeIcon.style.zIndex = "9999999999999"
    previewModeIcon.classList.add(".preview__eye")

    previewModeIcon.addEventListener("mouseenter", (e) => {
      if (previewModeIcon.style.right === "5px") {
        previewModeIcon.style.left = "5px"
        previewModeIcon.style.right = "auto"
      } else {
        previewModeIcon.style.left = "auto"
        previewModeIcon.style.right = "5px"
      }
    })

    document.body.appendChild(previewModeIcon)
    isEye = 1

  } else if (message === 'previewModeUAT' && window.location.href.includes("stg.knfilters.com") && document.querySelector("#__next") && isEye === 0) {
    const previewModeIcon = document.createElement("img")

    previewModeIcon.src = "https://res.cloudinary.com/knfilters-com/image/upload/v1620792157/Icons/eye_lb5xvc.svg"
    previewModeIcon.style.position = "fixed"
    previewModeIcon.style.top = "5px"
    previewModeIcon.style.right = "5px"
    previewModeIcon.style.width = "32px"
    previewModeIcon.style.height = "32px"
    previewModeIcon.style.transition = "all .3s"
    previewModeIcon.style.zIndex = "9999999999999"
    previewModeIcon.classList.add(".preview__eye")

    previewModeIcon.addEventListener("mouseenter", (e) => {
      if (previewModeIcon.style.right === "5px") {
        previewModeIcon.style.left = "5px"
        previewModeIcon.style.right = "auto"
      } else {
        previewModeIcon.style.left = "auto"
        previewModeIcon.style.right = "5px"
      }
    })

    document.body.appendChild(previewModeIcon)
    isEye = 1
  }
})

