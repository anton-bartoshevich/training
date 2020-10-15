let likesNumber = document.querySelector('.icons-like-count')
let like = document.querySelector('.icon-like')
like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--
  } else {
    likesNumber.textContent++
  }
  like.classList.toggle('added')
}
