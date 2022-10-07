// Scroll Menu
const navBar = document.querySelector('header.nav__menu')

function scrolled() {
  navBar.classList.toggle('scrolled', window.pageYOffset > 0)
  activeLink()
  btnToTop()
}

scrolled()

window.addEventListener('scroll', scrolled)

// button to top ===================
function btnToTop() {
  const btnToTop = document.querySelector('.btn__top')
  const btnToTopClick = document.querySelector('.btn__top a')
  const body = document.querySelector('body')

  if (body.getBoundingClientRect().top < -50) {
    btnToTop.classList.add('btn__top-active')
  } else {
    btnToTop.classList.remove('btn__top-active')
  }

  btnToTopClick.addEventListener('click', () => {
    if (btnToTop.classList.contains('btn__top-active')) {
      btnToTop.classList.remove('btn__top-active')
    }
  })
}

// ScrollReveal ===================
const slideTop = {
  mobile: true,
  delay: 0,
  duration: 550,
  reset: true,
  origin: 'top',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 200,
    right: 0,
    bottom: 200,
    left: 0
  }
}
const slideBotton = {
  mobile: true,
  delay: 0,
  duration: 550,
  reset: true,
  origin: 'bottom',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 200,
    right: 0,
    bottom: 200,
    left: 0
  }
}
const slideleft = {
  mobile: true,
  delay: 0,
  duration: 550,
  reset: true,
  origin: 'left',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 200,
    right: 0,
    bottom: 200,
    left: 0
  }
}
const slideright = {
  mobile: true,
  delay: 0,
  duration: 550,
  reset: true,
  origin: 'rigt',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 200,
    right: 0,
    bottom: 200,
    left: 0
  }
}

ScrollReveal().reveal('.home__info', slideTop)
ScrollReveal().reveal('.home__img', slideBotton)
ScrollReveal().reveal('.sobre__img', slideleft)
ScrollReveal().reveal('.sobre__info', slideright)
ScrollReveal().reveal('.service__front', slideleft)
ScrollReveal().reveal('.service__design', slideright)
ScrollReveal().reveal('.skill__container', slideBotton)
ScrollReveal().reveal('.cards', slideBotton)
ScrollReveal().reveal('.contact__info', slideleft)
ScrollReveal().reveal('.contact__form', slideright)
// Titles
ScrollReveal().reveal('#serviços .title', slideTop) //serviços
ScrollReveal().reveal('#habilidades .title', slideTop) //habilidades
ScrollReveal().reveal('#portifolio .title', slideTop) //portifolio

//elementos
ScrollReveal().reveal('.elm_triangle', slideright)
ScrollReveal().reveal('.elm_circles', slideright)
ScrollReveal().reveal('.rafa_emoticon02', slideright)

// Typewriter ===================
const app = document.querySelector('.home__typewrite')

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
})

typewriter
  .pauseFor(2500)
  .typeString('designer <i class="uil uil-pen"></i>')
  .pauseFor(1500)
  .deleteChars(20)
  .typeString('frontend <i class="uil uil-arrow"></i>    ')
  .pauseFor(2000)
  .deleteChars(20)
  .typeString('freelancer <i class="uil uil-thumbs-up"></i>')
  .pauseFor(3250)
  .start()

// Modal Serviços ===================
const frontendModal = document.querySelector('.modal__frontend')
const designModal = document.querySelector('.modal__design')
const fontBtnView = document.querySelector('.front__service')
const designBtnView = document.querySelector('.design__service')
const modal = document.querySelector('.modal__overlay')
const closeModal = document.querySelectorAll('.modal__close')
const btnTop = document.querySelector('.btn__top')
btnTop.classList.add('btn__top-active')

fontBtnView.addEventListener('click', function () {
  frontendModal.classList.add('modal__active')
  modal.classList.add('modal__overlay-open')
  btnTop.classList.remove('btn__top-active')

  document.documentElement.style.overflow = 'hidden'
  document.body.scroll = 'no' // IE
})

designBtnView.addEventListener('click', function () {
  designModal.classList.add('modal__active')
  modal.classList.add('modal__overlay-open')
  btnTop.classList.remove('btn__top-active')

  document.documentElement.style.overflow = 'hidden'
  document.body.scroll = 'no' // IE
})

closeModal.forEach((target) => {
  target.addEventListener('click', () => {
    const currentmodal = target.parentElement
    modal.classList.remove('modal__overlay-open')
    currentmodal.classList.remove('modal__active')
    btnTop.classList.add('btn__top-active')

    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes' // IE
  })
})

// Habilidades ==========================
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

// Swipper ==========================
const swiper = new Swiper('.cards', {
  slidesPerView: 'auto',
  spaceBetween: 120,
  centeredSlides: true,
  cssMode: true,
  passiveListeners: true,
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

// Section ativa ==========================
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
  menuLinks[currentSection].classList.add('active')
}
activeLink()

// Send Form ==========================
const submitBtn = document.querySelector('.contact__form form button')
const form = document.querySelector('.contact__form form')
const nameForm = document.querySelector('.form__input-nome')
const emailForm = document.querySelector('.form__input-email')
const msgForm = document.querySelector('.form__input-msg')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  submitBtn.innerHTML = '<i class="uil uil-spinner"></i>'
  submitBtn.classList.add('load')

  const nameForm = document.querySelector('.form__input-nome')
  const emailForm = document.querySelector('.form__input-email')
  const msgForm = document.querySelector('.form__input-msg')

  validaForm(nameForm, emailForm, msgForm)
})

function validaForm(nome, email, msg) {
  const alertNome = document.querySelector('.alert__nome')
  const alertEmail = document.querySelector('.alert__email')
  const alertMsg = document.querySelector('.alert__msg')
  const successMsg = document.querySelector('.success__msg')
  const mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!nome.value) {
    alertNome.classList.add('open')
    alertNome.innerHTML = `
    <p class="input__alert">
    <i class="uil uil-exclamation-triangle"></i>
    precisa conter um nome
    </p>`
  } else {
    alertNome.classList.remove('open')
  }

  if (!email.value.match(mailformat)) {
    alertEmail.classList.add('open')
    alertEmail.innerHTML = `
    <p class="input__alert">
    <i class="uil uil-exclamation-triangle"></i>
    email inválido
    </p>`
  } else {
    alertEmail.classList.remove('open')
  }

  if (!msg.value) {
    alertMsg.classList.add('open')
    alertMsg.innerHTML = `
    <p class="input__alert">
    <i class="uil uil-exclamation-triangle"></i>
    precisa conter uma mensagem
    </p>`
  } else {
    alertMsg.classList.remove('open')
  }

  if (nome.value && email.value && msg.value) {
    //form.submit()

    sendMail(nome.value, email.value, msg.value)
    nome.value = ''
    email.value = ''
    msg.value = ''
  }

  function sendMail(nome, email, msg) {
    fetch('https://formsubmit.co/ajax/0a892a84953d6ee97eba9389283cf6c1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        Nome: nome,
        Email: email,
        Menssagem: msg
      })
    })
      .then((response) => {
        successMsg.classList.add('success')
        submitBtn.classList.remove('load')
        submitBtn.innerHTML = 'enviar <i class="uil uil-message"></i>'
      })
      .catch((error) => console.log(error))
  }
}
