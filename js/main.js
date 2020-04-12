function getLogoClassName(elementClassName) {
  let className = 'logoContainer'

  if (
    elementClassName.includes('blueBg1') ||
    elementClassName.includes('greenBg1') ||
    elementClassName.includes('introOutro')
  ) {
    className += ' logoWhite'
  } else if (elementClassName.includes('whiteBg1')) {
    className += ' logoGreen'
  }

  if (elementClassName.includes('logoLeft')) {
    className += ' logoLeft'
  } else if (elementClassName.includes('introOutro')) {
    className += ' introLogo'
  } else {
    className += ' logoRight'
  }

  return className
}

function injectSvg(fileUrl, elements) {
  fetch(fileUrl)
    .then(r => r.text())
    .then(rText => {
      for (element of elements) {
        const logoContainer = document.createElement('div')
        logoContainer.className = getLogoClassName(element.className)
        logoContainer.innerHTML = rText
        element.appendChild(logoContainer)
        console.log(element)
      }
    })
}

function replaceTextAreaContents(fileUrl, textArea) {
  fetch(fileUrl)
    .then(r => r.text())
    .then(rText => {
      textArea.innerHTML = rText
      remark.create({highlightStyle: 'ir-black'});
      injectSvg(
        'svg/team_logo.svg',
        document.querySelectorAll('.blueBg1, .greenBg1, .whiteBg1, .introOutro')
      )
    })
}

replaceTextAreaContents('markdown/slides.md', document.getElementById('source'))