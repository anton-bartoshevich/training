let submitForm = document.querySelector('.form')
let submitButton = document.querySelector('.form-btn')
let textField = document.querySelector('.comment__message')

textField.oninput = function () {
  if (textField.value.length < 10 || textField.value.length >= 200) {
    textField.classList.add('warning')
    submitButton.classList.add('warning-btn')
    submitButton.disabled = true

  } else {
    textField.classList.remove('warning')
    submitButton.classList.remove('warning-btn')
    submitButton.disabled = false
  }
}