//variables

var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')




// when the hash changes
function setActiveTabAccordingToHash(type) {
  makeAllTabsInactive();
  var tabToActivate = document.querySelector(`a[href="#${type}"]`);
  tabToActivate.classList.add("active");
}


function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}
//runs on page loads and when has changes
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  data.forEach(function (item) {

    if (item.section === type) {
      contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`
      setActiveTabAccordingToHash(type);
    }
  });
}

//initalize page when page loads
function initializePage(){
  if(!window.location.hash){
    window.location.hash = "cuisines";
    document.querySelector("[href]=#cuisines").classList.add("active");
  }
  else{
    document.querySelector(`[href= "${window.location.hash}]"`);
  }
  
  setContentAccordingToHash();
}
//event listeners
window.addEventListener("hashchange", setContentAccordingToHash)


//initializePage();
document.addEventListener("DOMContentLoaded", initializePage);