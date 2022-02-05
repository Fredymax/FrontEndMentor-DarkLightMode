const getComputedStyles = $property => getComputedStyle($root).getPropertyValue($property)
const setComputedStyles = ($property, value) => $root.style.setProperty($property, value)

const $cbxDarkMode = document.getElementById('dark-mode')
const $root = document.querySelector(':root')
const isLightMode = () => window.matchMedia("(prefers-color-scheme: light)").matches
const getThemeColor = () => window.localStorage.getItem('theme-color') || setDetectedChangeColorTheme()

let isDesktopLightMode = window.matchMedia("(prefers-color-scheme: light)").matches

$cbxDarkMode.addEventListener('change' , () => {
  const newTheme = $cbxDarkMode.checked ? 'light' : 'dark'
  window.localStorage.setItem('theme-color', newTheme)
  setMode()
})
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', setDetectedChangeColorTheme)

function setDetectedChangeColorTheme() {
  const newTheme = isLightMode() ? 'light' : 'dark'
  window.localStorage.setItem('theme-color', newTheme)
  setMode()
}

function setMode() {
  if(getThemeColor() == 'light') {
    setColorLightMode()
    $cbxDarkMode.checked = true
  } else {
    setColorDarkMode()
    $cbxDarkMode.checked = false
  }
}

setMode()

function setColorLightMode() {
  setComputedStyles('--switch-bg-theme-light', 'hsl(230, 22%, 74%)')
  setComputedStyles('--switch-btn-theme-light', '#fff')
  setComputedStyles('--bg-body', '#fff')
  setComputedStyles('--bg-pattern', 'hsl(225, 100%, 98%)')
  setComputedStyles('--text-gray-color', '#565969')
  setComputedStyles('--bg-hover-switch', 'linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))')
  setComputedStyles('--text-color-general', '#1B1E27')
  setComputedStyles('--card-bg', 'hsl(227, 47%, 96%)')
  setComputedStyles('--card-text-color', 'hsl(228, 12%, 44%)')
}

function setColorDarkMode() {
  setComputedStyles('--switch-bg-theme-light', 'hsl(230, 22%, 74%)')
  setComputedStyles('--switch-btn-theme-light', 'hsl(230, 17%, 14%)')
  setComputedStyles('--bg-body', '#1D2029')
  setComputedStyles('--bg-pattern', '#20222F')
  setComputedStyles('--text-gray-color', 'hsl(228, 34%, 66%)')
  setComputedStyles('--bg-hover-switch', 'linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))')
  setComputedStyles('--text-color-general', '#fff')
  setComputedStyles('--card-bg', 'hsl(228, 28%, 20%)')
  setComputedStyles('--card-text-color', 'hsl(228, 34%, 66%)')
}