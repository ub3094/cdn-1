(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"default","theme":"unstyled","fallback":true,"urls":{"impression":"","campaign":"https://www.cav.ooo/?float-1","poweredBy":"https://www.cav.ooo/?float-2","adblock":"","uplift":"https://www.cav.ooo/?float-3"},"creative":{"name":"sustain-35","headline":"ÖÐÉ«µ¼º½ #35","body":" body ðŸŽ§ All About The Drupal Association","cta":"Listen now!","imageUrls":{"icon":"https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/logo1.png?float-1","small":"https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/logo1.png?float-2","large":"https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/logo1.png?float-3","wide":"https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/logo1.png?float-4"}}})
  }

  const codefundThemeName = 'unstyled'
  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId) && codefundThemeName !== 'unstyled') {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/float/css/code_fund_ad-80b0f684.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://cdn.jsdelivr.net/gh/avhot/cdn@latest/www.cav.ooo/float/js/code_fund_ad-4b8b74e2db6b8c0ddd32.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
