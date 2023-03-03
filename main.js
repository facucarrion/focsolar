// Menu Responsive //

const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')
const menu = document.querySelector('.header__nav--menu')
const articleMenu = document.querySelectorAll('.header__nav--menu_articulo')

const openMenu = () => {
  menu.style.transition = 'transform 0.3s ease-in-out'
  openButton.style.display = 'none'
  closeButton.style.display = 'block'
  menu.style.transform = 'scale(1, 1)'
  menu.style.transformOrigin = 'right'
}
const closeMenu = () => {
  openButton.style.display = 'block'
  closeButton.style.display = 'none'
  menu.style.transform = 'scale(0, 1)'
  menu.style.transformOrigin = 'right'
}

// Resolution Check

const checkResolution = () => {
  if (window.innerWidth <= 900) {
    closeMenu()
    articleMenu.forEach(article => {
      article.addEventListener('click', closeMenu, true)
    })
  } else {
    openMenu()
    articleMenu.forEach(article => {
      article.removeEventListener('click', closeMenu, true)
    })
  }
}
checkResolution()

openButton.addEventListener('click', () => {
  openMenu()
})
closeButton.addEventListener('click', () => {
  closeMenu()
})
window.onresize = () => {
  window.outerWidth <= 912
    ? (menu.style.transform = 'scale(0, 1)')
    : (menu.style.transform = 'scale(1, 1)')
  checkResolution()
}

// Social Links Hover //

const facebookLink = document.getElementById('facelink')
const facebookIcon = document.getElementById('faceicon')
const igLink = document.getElementById('iglink')
const igIcon = document.getElementById('igicon')
const eventHover = (link, event, icon, color, transition) => {
  link.addEventListener(event, () => {
    icon.style.color = color
    if (transition == true) icon.style.transition = 'color 350ms ease'
  })
}
eventHover(facebookLink, 'mouseover', facebookIcon, '#3b5998', true)
eventHover(facebookLink, 'mouseout', facebookIcon, '#efefef99', false)
eventHover(igLink, 'mouseover', igIcon, '#e23ecc', true)
eventHover(igLink, 'mouseout', igIcon, '#efefef99', false)
