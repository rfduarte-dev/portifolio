// Scroll Menu
const navBar = document.querySelector('header.nav__menu')

function scrolled() {
  navBar.classList.toggle('scrolled', window.pageYOffset > 0)
  activeLink()
}

scrolled()

window.addEventListener('scroll', scrolled)

// ScrollReveal
const slideTop = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'top',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 100,
    right: 0,
    bottom: 0,
    left: 0
  }
}
const slideBotton = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'bottom',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)'
}
const slideleft = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'left',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)'
}
const slideright = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'rigt',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)'
}

ScrollReveal().reveal('.home__info', slideTop)
ScrollReveal().reveal('.home__img', slideBotton)
ScrollReveal().reveal('.sobre__img', slideleft)
ScrollReveal().reveal('.sobre__info', slideright)
ScrollReveal().reveal('.service__title', slideTop)
ScrollReveal().reveal('.service__front', slideleft)
ScrollReveal().reveal('.service__design', slideright)
ScrollReveal().reveal('.skill__title', slideTop)
ScrollReveal().reveal('.skill__container', slideBotton)
ScrollReveal().reveal('.portifolio__title', slideTop)
ScrollReveal().reveal('.cards', slideBotton)
ScrollReveal().reveal('.contact__info', slideleft)
ScrollReveal().reveal('.contact__form', slideright)

// Typewriter
const app = document.querySelector('.home__typewrite')

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
})

typewriter
  .pauseFor(3500)
  .typeString('designer <i class="uil uil-pen"></i>')
  .pauseFor(1500)
  .deleteChars(20)
  .typeString('frontend devloper <i class="uil uil-arrow"></i>')
  .pauseFor(2000)
  .deleteChars(20)
  .typeString('freelancer <i class="uil uil-thumbs-up"></i>')
  .pauseFor(4000)
  .start()

// Modal ===================

const frontendModal = document.querySelector('.modal__frontend')
const designModal = document.querySelector('.modal__design')
const fontBtnView = document.querySelector('.front__service')
const designBtnView = document.querySelector('.design__service')
const closeModal = document.querySelectorAll('.modal__close')

fontBtnView.addEventListener('click', function () {
  frontendModal.classList.add('modal__active')
})

designBtnView.addEventListener('click', function () {
  designModal.classList.add('modal__active')
})

closeModal.forEach((target) => {
  target.addEventListener('click', () => {
    const modal = target.parentElement
    modal.classList.remove('modal__active')
  })
})

// Habilidades
//.scrollHeight

const skillitens = document.querySelectorAll('.skill__container')

skillitens.forEach((target) => {
  target.addEventListener('click', () => {
    const itemInfo = target.querySelector('.skill__info-itens')

    if (target.classList.contains('item__open')) {
      target.classList.remove('item__open')
      itemInfo.style.height = 0 + 'px'
    } else {
      target.classList.add('item__open')
      itemInfo.style.height = itemInfo.scrollHeight + 'px'
    }
  })
})

// Swipper
const swiper = new Swiper('.cards', {
  slidesPerView: 'auto',
  spaceBetween: 120,
  centeredSlides: true,
  cssMode: true,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// Modal Img =========================================
const imgZoom = document.querySelectorAll('.card__img-zoom')
const modalOverlay = document.querySelector('.modal__overlay')
const modalPortifolio = document.querySelector('.modal__img-portifolio')
const modalImgs = modalPortifolio.querySelectorAll('img')

imgZoom.forEach((icon, indice) =>
  icon.addEventListener('click', () => {
    modalPortifolio.classList.add('open')
    modalImgs[indice].classList.add('open')
  })
)

modalOverlay.addEventListener('click', () => {
  modalPortifolio.classList.remove('open')
  modalImgs.forEach((img) => {
    img.classList.remove('open')
  })
})

// Menu Mobile ==========================

const btnMenu = document.querySelector('.btn__menu-mobile')
const menuLinks = document.querySelectorAll('.nav__link ul li')
const contactBtn = document.querySelector('.btn__hero a')

contactBtn.addEventListener('click', () => {
  navBar.classList.remove('open')
  btnMenu.innerHTML = '<i class="uil uil-bars"></i>'
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.classList.remove('open')
    btnMenu.innerHTML = '<i class="uil uil-bars"></i>'
  })
})

btnMenu.addEventListener('click', () => {
  if (navBar.classList.contains('open')) {
    navBar.classList.remove('open')
    btnMenu.innerHTML = '<i class="uil uil-bars"></i>'
  } else {
    navBar.classList.add('open')
    btnMenu.innerHTML = '<i class="uil uil-times"></i>'
  }
})

// Current Section =====
function activeLink() {
  const menuLinks = document.querySelectorAll('.nav__link ul li')
  const header = document.querySelector('header')
  const sections = document.querySelectorAll('section')
  let passedSections = Array.from(sections)
    .map((sct, i) => {
      return { y: sct.getBoundingClientRect().top - header.offsetHeight, id: i }
    })
    .filter((sct) => sct.y <= 0)

  let currentSection = passedSections.at(-1).id

  menuLinks.forEach((link) => link.classList.remove('active'))
  //menuLinks[currentSection].classList.add('active')
}
activeLink()

// Send Form ====

const submitBtn = document.querySelector('.contact__form form button')
const form = document.querySelector('.contact__form form')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const nameForm = document.querySelector('.form__input-nome')
  const emailForm = document.querySelector('.form__input-email')
  const msgForm = document.querySelector('.form__input-msg')

  validaForm(nameForm, emailForm, msgForm)
})

function validaForm(nome, email, msg) {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!nome.value) alert('nome invalido')
  if (!email.value.match(mailformat)) alert('email invalido')
  if (!msg.value) alert('msg invalido')

  //form.submit()
}
