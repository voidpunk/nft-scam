// wow effects
$(".img-fluid").addClass("wow fadeIn z-depth-1-half");
new WOW().init();

// responsive hover for svg icons and logo
let svgs = document.querySelectorAll('svg');
let logo = document.getElementById('logo')
svgs.forEach(element => {
    element.addEventListener('mouseover', () => {
      $(element).attr("fill", "#36ba90");
  });
});
logo.addEventListener('mouseover', () => {
  $(logo).attr('src', 'img/logo_hover.png');
  }
);
svgs.forEach(element => {
  element.addEventListener('mouseout', () => {
    $(element).attr("fill", "white");
  });
});
logo.addEventListener('mouseout', () => {
  $(logo).attr('src', 'img/logo.png');
  }
);

// metamask button
const getWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    const web3 = new Web3(window.ethereum)
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      resolve(web3)
    } catch (error) {
      reject(error)
    }
  })
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tip-button").addEventListener("click", async () => {
    const web3 = await getWeb3();
  })
})

// scroll buttons
function scrollToProject() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 992){
    var headerOffset = 90
  } else {
    var headerOffset = 300
  }
  const project = document.getElementById("project");
  const elementPosition = project.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
function scrollToRoadmap() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 992){
    var headerOffset = 90
  } else {
    var headerOffset = 300
  }
  const roadmap = document.getElementById("roadmap");
  const elementPosition = roadmap.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
function scrollToContribute() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 992){
    var headerOffset = 90
  } else {
    var headerOffset = 300
  }
  const contribute = document.getElementById("contribute");
  const elementPosition = contribute.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

// navbar button fix
const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach((l) => {
  l.addEventListener('click', () => {
      if (menuToggle.classList.contains('show')) {
        bsCollapse.toggle();
      } 
    });
  });

// let width = window.innerWidth;