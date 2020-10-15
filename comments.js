let commentForm = document.querySelector('.form')
let commentfield = document.querySelector('.comments')
let userName = document.querySelector('.username')
let commentMessage = document.querySelector('.comment__message')
commentForm.onsubmit = function (evt) {
  evt.preventDefault()

  let newComment = document.createElement('div')
  newComment.classList.add('comment')
  commentfield.appendChild(newComment)

  let newName = document.createElement('p')
  newName.classList.add('comment-name')
  newName.textContent = userName.value
  newComment.appendChild(newName)
  userName.value='';
  let newMessage = document.createElement('p')
  newMessage.classList.add('comment__text')
  newMessage.textContent = commentMessage.value
  commentfield.appendChild(newMessage)
  commentMessage.value=''
}
