function randombutton(button) {
  var initialClick = false
  var randomRange = 6
  let sitelistName = 'feeling-lucky'
  var sitesList = [
    'https://thedinogame.com/night/',
    'https://thedinogame.com/dino-jump/',
    'https://thedinogame.com/immortal/',
	'https://thedinogame.com/dino-run-dx/',
  ]
  var sites = null
  var init = function () {
    button.onclick = onButtonClick
    sites = sitesList.slice()
    if (localStorage[sitelistName]) {
      var currentSites = JSON.parse(localStorage[sitelistName])
      var filteredSites = currentSites.filter(
        (site) => sitesList.indexOf(site) !== -1,
      )
      if (filteredSites.length > 0) {
        sites = filteredSites
      }
    }
  }
  var selectWebsite = function () {
    var site, range, index
    range = randomRange > sites.length ? sites.length : randomRange
    index = Math.floor(Math.random() * range)
    site = sites[index]
    sites.splice(index, 1)
    return site
  }
  var openSite = function (url) {
    window.open(url)
  }
  var onButtonClick = function () {
    if (window.gtag) {
      gtag('event', 'click', { event_category: 'button' })
    }
    var url = selectWebsite()
    openSite(url)
    if (sites.length == 0) {
      sites = sitesList.slice()
    }
    localStorage[sitelistName] = JSON.stringify(sites)
  }
  init()
}
var randombutton = new randombutton(document.getElementById('button'))
