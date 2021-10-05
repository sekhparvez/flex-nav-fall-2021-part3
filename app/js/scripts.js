var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')

document.querySelector('nav a').classList.add('active')

contentPara.innerHTML = data.cuisines

document.addEventListener('click', makeActive)

function makeActive(event) {
  if (!event.target.matches('a')) return

  makeInactive()
  event.target.classList.add('active')

  var type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}
