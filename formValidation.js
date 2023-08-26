const $formToValidate = document.getElementById('contactform')
const $inputs = document.querySelectorAll(
  '#contactform .contact__input, textarea'
)

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  textarea: /^[\s\S]{0,220}$/
}

const places = {
  nameInput: false,
  messageInput: false
}

const inputValidation = (input, expression, id, className) => {
  if (expression.test(input.value)) {
    document.getElementById(id).classList.remove('contact__input--incorrect')
    document.getElementById(id).classList.add('contact__input--correct')
    document.querySelector(`${className} p`).classList.remove('contact__error')
    document.querySelector(`${className} p`).classList.add('contact__correct')
    places[id] = true
  } else {
    document.getElementById(id).classList.remove('contact__input--correct')
    document.getElementById(id).classList.add('contact__input--incorrect')
    document.querySelector(`${className} p`).classList.remove('contact__correct')
    document.querySelector(`${className} p`).classList.add('contact__error')
    places[id] = false
  }
}

const formValidation = e => {
  switch (e.target.name) {
    case 'namee':
      inputValidation(e.target, expresiones.nombre, 'nameInput', '.contname')
      break

    case 'message':
      inputValidation(
        e.target,
        expresiones.textarea,
        'messageInput',
        '.contmen'
      )
      break
  }
}

$inputs.forEach(input => {
  input.addEventListener('keyup', formValidation)
  input.addEventListener('blur', formValidation)
})

console.log(places)
console.log($formToValidate)

$formToValidate.addEventListener('submit', e => {
  e.preventDefault()

  if (places.nameInput && places.messageInput) {
    document.querySelector('.contact__senderror').style.transform = 'scale(0)'
    document.querySelector('.contact__sendcorrect').style.transform = 'scale(1)'
    setTimeout(() => {
      document.querySelector('.contact__sendcorrect').style.transform =
        'scale(0)'
    }, 5000)
    console.log(places)
    const anchor = document.getElementById('redirect-to-whatsapp')
    anchor.href = `https://wa.me/3571552833?text=Hola, mi nombre es ${$inputs[0].value}. ${$inputs[1].value}`
    anchor.click()
  } else {
    document.querySelector('.contact__sendcorrect').style.transform = 'scale(0)'
    document.querySelector('.contact__senderror').style.transform = 'scale(1)'
  }
})
